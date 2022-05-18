import React from 'react'
import ReactDOM from 'react-dom/client'
import MainCard from './MainCard'
import './index.scss'
import './DarkTheme.scss'

import 'materialize-css/sass/materialize.scss'
import 'materialize-css'
import 'material-icons/iconfont/material-icons.css'
import './MainCard.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <main>
        <div className="background-image"></div>
        <div className="container">
          <div className="row">
            <MainCard />
          </div>
        </div>
      </main>
  </React.StrictMode>
)
