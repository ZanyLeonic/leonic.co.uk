import React, { useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import ImagePlaceholder from "./image-placeholder";

import "./sass/main-card.scss";

const MainCard: React.FC<{ gitHubName: string }> = (props) => {
  const [loading, setLoading] = useState(true);
  const [imageURL, setImageURL] = useState("");
  const [bio, setBio] = useState("(loading...)");

  useEffect(() => {
    fetch(`https://api.github.com/users/${props.gitHubName}`)
      .then((response) => response.json())
      .then((jRes) => {
        setLoading(false);
        setImageURL(jRes.avatar_url);
        setBio(jRes.bio);
      });
  }, []);

  return (
    <div className="main-content col s12 m8 offset-m2 l6 offset-l3">
      <div className="card hoverable white-text">
        {loading && (
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        )}
        <div className="card-image">
          {loading ? (
            <ImagePlaceholder />
          ) : (
            <FadeIn>
              <img className="responsive-img" src={imageURL} />
            </FadeIn>
          )}
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <div className="card-header">
              <span className="card-title">Leo Durrant</span>
              <span className="card-subtitle">
                Other Aliases: Leonic, ZanyLeonic
              </span>
            </div>
            <div className="divider"></div>
            <div className="extra-info">
              <div className="profile-point desktop">
                <span>
                  <i className="material-icons">school</i> BSc Computer Science
                  (With a Year in Industry) @ RHUL
                </span>
              </div>
              <div className="profile-point mobile">
                <span>
                  <i className="material-icons">school</i> BSc Computer Science
                  (YINI) @ RHUL
                </span>
              </div>
              <div className="profile-point">
                <span>
                  <i className="material-icons">location_city</i> Egham, Surrey,
                  United Kingdom
                </span>
              </div>
              <div className="profile-point">
                <span>
                  <i className="material-icons">contact_mail</i>{" "}
                  <a href="mailto:admin@leonic.co.uk">admin@leonic.co.uk</a>
                </span>
              </div>
              {bio != null && (
                <div className="profile-point">
                  <span>
                    <i className="material-icons">info_outline</i> "<i>{bio}</i>
                    "
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="card-action">
            <table>
              <tbody>
                <tr>
                  <td>Portfolio</td>
                  <td className="right">
                    <a
                      href="https://poweredby.leonic.co.uk/"
                      className="waves-effect waves-orange btn-flat disabled"
                    >
                      Coming soon
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>GitHub</td>
                  <td className="right">
                    <a
                      href="https://github.com/ZanyLeonic/"
                      className="waves-effect waves-orange btn-flat"
                    >
                      ZanyLeonic
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>LinkedIn</td>
                  <td className="right">
                    <a
                      href="https://linkedin.com/in/leo-durrant/"
                      className="waves-effect waves-orange btn-flat"
                    >
                      Leo Durrant
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
