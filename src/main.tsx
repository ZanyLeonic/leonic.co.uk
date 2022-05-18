import React from 'react'
import ReactDOM from 'react-dom/client'
import MainCard from './main-card'
import Footer from './footer'

import 'materialize-css/sass/materialize.scss'
import 'materialize-css'
import 'material-icons/iconfont/material-icons.css'

import "./sass/ext/dark-theme.scss"
import "./sass/ext/scanlines.scss"

import './sass/index.scss'

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
