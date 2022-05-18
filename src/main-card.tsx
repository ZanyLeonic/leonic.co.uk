import { Component } from "react"
import FadeIn from "react-fade-in"
import ImagePlaceholder from "./image-placeholder"

import "./sass/main-card.scss"

interface LoadingState {
  loading: boolean
  imageURL: string
}

interface MainCardProps {
  gitHubName: string
}

class MainCard extends Component<MainCardProps, LoadingState> {

  constructor(props: MainCardProps) {
    super(props)
    this.state = {
      loading: true,
      imageURL: ""
    }
  }

  componentDidMount() {
    fetch(`https://github.com/${this.props.gitHubName}.png?size=460`)
    .then(response => response.blob())
    .then(imageBlob => {
        const imageObjectURL = URL.createObjectURL(imageBlob);

        this.setState({ loading: false, imageURL: imageObjectURL })
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
              ) : (<></>)
          }
          <div className="card-image">
            {this.state.loading ? (
                <ImagePlaceholder />
              ) : (
                <FadeIn>
                  <img className="responsive-img" src={this.state.imageURL} />
                </FadeIn>
              )     
            }
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <div className="card-header">
                <span className="card-title">Leo Durrant</span>
                <span className="card-subtitle">Other Aliases: Leonic, ZanyLeonic</span>
              </div>
              <div className="divider"></div>
              <div className="extra-info">
                <div className="profile-point desktop"><span><i className="material-icons">school</i> BSc Computer Science (With a Year in Industry) @ RHUL</span></div>
                <div className="profile-point mobile"><span><i className="material-icons">school</i> BSc Computer Science (YINI) @ RHUL</span></div>
                <div className="profile-point "><span><i className="material-icons">location_city</i> Egham, Surrey, United Kingdom</span></div>
              </div>
            </div>
            <div className="card-action">
              <table>
                <tbody>
                  <tr>
                    <td>CV</td>
                    <td className="right">
                      <a href="/static/cv.pdf" className="waves-effect waves-orange btn-flat">
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Portfolio</td>
                    <td className="right">
                      <a href="https://poweredby.leonic.co.uk/" className="waves-effect waves-orange btn-flat">
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>GitHub</td>
                    <td className="right">
                      <a href="https://github.com/ZanyLeonic/" className="waves-effect waves-orange btn-flat">
                        ZanyLeonic
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>LinkedIn</td>
                    <td className="right">
                      <a href="https://linkedin.com/in/leo-durrant/" className="waves-effect waves-orange btn-flat">
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
    )
  }
} 

export default MainCard
