import './materialize-src/sass/materialize.scss'
import './MainCard.scss'

function MainCard() {

  return (
    <div className="container">
      <div className="row">
        <div className="main col s6 m8 l4">
          <div className="card hoverable">
            <div className="card-image">
              <img className="" src="https://github.com/ZanyLeonic.png?size=460" />
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
                <table className="responsive-table">
                  <tbody>
                    <tr>
                      <td>CV</td>
                      <td className='right'><a href="#" className="waves-effect waves-teal btn-flat">View</a></td>
                    </tr>
                    <tr>
                      <td>Portfolio</td>
                      <td className='right'><a href="#" className="waves-effect waves-teal btn-flat">View</a></td>
                    </tr>
                    <tr>
                      <td>GitHub</td>
                      <td className='right'><a href="#" className="waves-effect waves-teal btn-flat">ZanyLeonic</a></td>
                    </tr>
                    <tr>
                      <td>LinkedIn</td>
                      <td className='right'><a href="#" className="waves-effect waves-teal btn-flat">Leo Durrant</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default MainCard
