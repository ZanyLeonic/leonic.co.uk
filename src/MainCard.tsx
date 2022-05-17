import './materialize-src/sass/materialize.scss'
import './MainCard.scss'

function MainCard() {

  return (
    <div className="container">
      <div className="row">
        <div className="main col s6 offset-s3">
          <div className="card hoverable vertical">
            <div className="card-image">
              <img className="circle responsive-img" src="https://github.com/ZanyLeonic.png?size=460" width="10%" height="10%" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <div className="card-header">
                  <span className="card-title">Leo Durrant</span>
                  <span className="card-subtitle">Other Aliases: Leonic, ZanyLeonic</span>
                </div>
                <div className="divider"></div>
                <div className="extra-info">
                  <div className="profile-point"><span><i className="material-icons">school</i> BSc Computer Science (With a Year in Industry) @ RHUL</span></div>
                  <div className="profile-point"><span><i className="material-icons">location_city</i> Egham, Surrey, United Kingdom</span></div>
                </div>
              </div>
              <div className="card-action">
                <div className="profile-point"><span>CV</span><a className="waves-effect waves-teal btn-flat right">Button</a></div>
                <div className="profile-point"><span>Portfolio</span><a className="waves-effect waves-teal btn-flat right" href="#">View</a></div>
                <div className="profile-point"><span>GitHub</span><a className="waves-effect waves-teal btn-flat right" href="#">ZanyLeonic</a></div>
                <div className="profile-point"><span>LinkedIn</span><a className="waves-effect waves-teal btn-flat right" href="#">Leo Durrant</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default MainCard
