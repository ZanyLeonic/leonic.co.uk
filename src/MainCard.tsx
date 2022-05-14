import './materialize-src/sass/materialize.scss'
import './MainCard.scss'
import 'https://fonts.googleapis.com/icon?family=Material+Icons'

function MainCard() {

  return (
    <div className="container">
      <div className="row">
        <div className="main col s6 offset-s3">
          <div className="card vertical">
            <div className="card-image">
              <img src="https://github.com/ZanyLeonic.png?size=460" width="10%" height="10%" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <span className="card-title">Leo Durrant</span>
                <span className="card-subtitle">Other Aliases: Leonic, ZanyLeonic</span>
                <span><i className='material-icons'>school</i></span>
              </div>
              <div className="card-action">
                <div className="service"><span>CV</span><a className="right" href="#">View</a></div>
                <div className="service"><span>Portfolio</span><a className="right" href="#">View</a></div>
                <div className="service"><span>GitHub</span><a className="right" href="#">ZanyLeonic</a></div>
                <div className="service"><span>LinkedIn</span><a className="right" href="#">Leo Durrant</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default MainCard
