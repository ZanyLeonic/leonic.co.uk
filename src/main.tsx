import React from 'react'
import ReactDOM from 'react-dom/client'
import MainCard from './MainCard'
import Footer from './Footer'
import './index.scss'
import './DarkTheme.scss'

import 'materialize-css/sass/materialize.scss'
import 'materialize-css'
import 'material-icons/iconfont/material-icons.css'
import './MainCard.scss'
import './Scanlines.scss'

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
      <footer className="">
        <Footer />
      </footer>
  </React.StrictMode>
)
