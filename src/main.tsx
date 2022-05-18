import React from 'react'
import ReactDOM from 'react-dom/client'
import MainCard from './MainCard'
import Footer from './Footer'

import 'materialize-css/sass/materialize.scss'
import 'materialize-css'
import 'material-icons/iconfont/material-icons.css'
import './Scanlines.scss'
import './DarkTheme.scss'
import './index.scss'
import './MainCard.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <main>
        <div className="background-image scanlines"></div>
        <div className="container">
          <div className="row">
            <MainCard />
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
  </React.StrictMode>
)
