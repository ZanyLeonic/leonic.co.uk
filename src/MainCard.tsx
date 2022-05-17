

function MainCard() {

  return (
    <div className="col s12 m8 offset-m2 l6 offset-l3">
      <div className="card hoverable">
        <div className="card-image">
          <img className="responsive-img" src="https://github.com/ZanyLeonic.png?size=460" />
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
                    <a href="#" className="waves-effect waves-orange btn-flat">
                      View
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Portfolio</td>
                  <td className="right">
                    <a href="#" className="waves-effect waves-orange btn-flat">
                      View
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>GitHub</td>
                  <td className="right">
                    <a href="#" className="waves-effect waves-orange btn-flat">
                      ZanyLeonic
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>LinkedIn</td>
                  <td className="right">
                    <a href="#" className="waves-effect waves-orange btn-flat">
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

export default MainCard
