import React from 'react'
import ReactDOM from 'react-dom/client'
import MainCard from './MainCard'
import './index.css'
import './DarkTheme.scss'

import 'material-icons/iconfont/material-icons.css'

class Main extends React.Component {
  componentDidMount() {
    document.title = "Leo Durrant | leonic.co.uk"
  }
  render(){
    return("")
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Main />
      <MainCard />
  </React.StrictMode>
)
