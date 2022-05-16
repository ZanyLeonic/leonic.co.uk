import React from 'react'
import ReactDOM from 'react-dom/client'
import MainCard from './MainCard'
import './index.css'
import './DarkTheme.scss'
import './materialize-src/sass/materialize.scss'
import 'material-icons/iconfont/material-icons.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <MainCard />
  </React.StrictMode>
)
