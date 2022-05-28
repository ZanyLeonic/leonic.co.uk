import { Component } from "react";
import { LocalStorage } from "ttl-localstorage";

import FadeIn from "react-fade-in";
import ImagePlaceholder from "./image-placeholder";
import parse from "html-react-parser";

import { createBlobFromImage, fetchImageFromCache, getJSON } from "./util";
import config from "./config.json";

import "./sass/home.scss";

interface HomeState {
  loading: boolean;
  imageURL: string;
  bio: string;
}

const avatarCacheID = "avatar";
const apiCacheID = "api";

class Home extends Component<{}, HomeState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      loading: true,
      imageURL: "",
      bio: "(loading...)",
    };
  }

  componentDidMount() {
    // Load the cached data from local storage
    const cachedResponse = LocalStorage.get(apiCacheID);
    const restoredImage = fetchImageFromCache(avatarCacheID);

    // If the API call hasn't been made in the last 12 hours, refetch the data
    if (cachedResponse == null || restoredImage == "") {
      this.fetchUserInfo(cachedResponse);
    } else {
      // Use the cached data
      this.setState({
        loading: false,
        imageURL: restoredImage,
        bio: cachedResponse.bio,
      });
    }
  }

  async fetchUserInfo(cachedResponse: string) {
    const response =
      cachedResponse == null
        ? await getJSON(
            `https://api.github.com/users/${config.user_info.github}`
          )
        : cachedResponse;

    createBlobFromImage(response.avatar_url, avatarCacheID, 43200).then(
      (imageBlobURL) => {
        LocalStorage.put(apiCacheID, response, 43200);

        this.setState({
          loading: false,
          imageURL: imageBlobURL,
          bio: response.bio,
        });
      }
    );
  }

  render() {
    return (
      <div className="home-wrapper" id="home-wrapper" data-content="home">
        {this.state.loading ? (
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        ) : null}
        <div className="card-image">
          {this.state.loading ? (
            <ImagePlaceholder />
          ) : (
            <FadeIn>
              <img
                className="responsive-img"
                alt={config.user_info.github + "'s profile picture"}
                src={this.state.imageURL}
                height="373px"
                width="373px"
              />
            </FadeIn>
          )}
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <div className="card-header">
              <span className="card-title">{config.user_info.name}</span>
              <span className="card-subtitle">
                Other Aliases: {config.user_info.aliases}
              </span>
            </div>
            <div className="divider"></div>
            <div className="extra-info">
              {config["profile-points"].map((point, i) => {
                return (
                  <div className="profile-point" key={i}>
                    <span>
                      <i className="material-icons">{point.icon}</i>{" "}
                      {parse(point.content)}
                    </span>
                  </div>
                );
              })}
              {this.state.bio != null ? (
                <div className="profile-point">
                  <span>
                    <i className="material-icons">info_outline</i> "
                    <i>{this.state.bio}</i>"
                  </span>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="card-action">
            <table>
              <tbody>
                {config.links.map((link, i) => {
                  return (
                    <tr key={i}>
                      <td>{link.title}</td>
                      <td className="right">
                        {link.nav_link ? (
                          <a
                            href="#"
                            data-navlink={link.url}
                            className={
                              "waves-effect waves-linkColour btn-flat" +
                              (!link.enabled ? " disabled" : "")
                            }
                          >
                            {link.button_text}
                          </a>
                        ) : (
                          <a
                            href={link.url}
                            className={
                              "waves-effect waves-linkColour btn-flat" +
                              (!link.enabled ? " disabled" : "")
                            }
                          >
                            {link.button_text}
                          </a>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;