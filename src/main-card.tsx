import { Component, useEffect } from "react";
import { LocalStorage } from "ttl-localstorage";
import { isIE } from "react-device-detect";
import FadeIn from "react-fade-in";
import ImagePlaceholder from "./image-placeholder";
import parse from "html-react-parser";

import { dataURItoBlob } from "./util";
import "isomorphic-fetch";

import config from "./config.json";

import "./sass/main-card.scss";

interface LoadingState {
  loading: boolean;
  imageURL: string;
  bio: string;
}

class MainCard extends Component<{}, LoadingState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      loading: true,
      imageURL: "",
      bio: "(loading...)",
    };
  }

  componentDidMount() {
    // Caching API calls to avoid unnecessary requests
    var gitResponse = LocalStorage.get("gitAPI");
    var cachedImage = LocalStorage.get("imageBlob");

    // If the API call hasn't been made in the last 12 hours, refetch the data
    if (gitResponse == null || cachedImage == null) {
      this.fetchAvatar();
      // Load the cached data from local storage
    } else {
      // IE11 doesn't like creating blobs from data URIs, so we just use the data URI
      var imageObjectURL = isIE
        ? cachedImage
        : URL.createObjectURL(dataURItoBlob(cachedImage));

      this.setState({
        loading: false,
        imageURL: imageObjectURL,
        bio: gitResponse.bio,
      });
    }
  }

  async getUserInfo() {
    return fetch(`https://api.github.com/users/${config.user_info.github}`)
      .then((response) => response.json())
      .then((jRes) => {
        return jRes;
      });
  }

  async fetchAvatar() {
    const response: any = await this.getUserInfo();

    fetch(response.avatar_url)
      .then((response) => response.blob())
      .then((imageBlob) => {
        const imageObjectURL = URL.createObjectURL(imageBlob);
        const reader = new FileReader();

        reader.onload = (event) => {
          LocalStorage.put("imageBlob", event.target?.result, 43200);
        };

        this.setState({
          loading: false,
          imageURL: imageObjectURL,
          bio: response.bio,
        });
        LocalStorage.put("gitAPI", response, 43200);
        reader.readAsDataURL(imageBlob);
      });
  }

  parsePoints() {
    return config["profile-points"].map((point) => {
      <div className="profile-point">
        <span>
          <i className="material-icons">{point.icon}</i> {point.content}
        </span>
      </div>;
    });
  }

  render() {
    return (
      <div className="main-content col s12 m8 offset-m2 l6 offset-l3">
        <div className="card hoverable white-text">
          {this.state.loading ? (
            <div className="progress">
              <div className="indeterminate"></div>
            </div>
          ) : (
            <></>
          )}
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
                          <a
                            href={link.url}
                            className={
                              "waves-effect waves-linkColour btn-flat" +
                              (!link.enabled ? " disabled" : "")
                            }
                          >
                            {link.button_text}
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainCard;
