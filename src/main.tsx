import React from 'react'
import ReactDOM from 'react-dom/client'
import MainCard from './main-card'
import Footer from './footer'

import 'materialize-css/sass/materialize.scss'
import 'materialize-css'
import 'material-icons/iconfont/material-icons.css'
import './sass/scanlines.scss'
import './sass/dark-theme.scss'
import './sass/index.scss'
import './sass/main-card.scss'

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
