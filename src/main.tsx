import React from 'react'
import ReactDOM from 'react-dom/client'
import MainCard from './main-card'
import Footer from './footer'

import config from '../static/config.json'

import 'materialize-css/sass/materialize.scss'
import 'materialize-css'
import 'material-icons/iconfont/material-icons.css'

import "./sass/ext/dark-theme.scss"
import "./sass/ext/scanlines.scss"

import './sass/index.scss'

const backgrounds = config.backgrounds;
const background = backgrounds[Math.floor(Math.random() * backgrounds.length)];

/* Return to DOM lol */
var css = document.createElement('style') as HTMLStyleElement;
css.type = "text/css"

css.appendChild(document.createTextNode(
    `.background-image { 
      background-image: url(${background.url}); 
    } 
    .card::before { 
      background-image: url(${background.url}); 
    }`
  )
);

document.getElementsByTagName('head')[0].appendChild(css);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <main>
        <div className="background-image scanlines"></div>
        <div className="container">
          <div className="row">
            <MainCard
              gitHubName={config.githubUsername}
            />
          </div>
        </div>
      </main>
      <footer>
        <Footer
          author={background.author}
          authorURL={background.author_url} 
          photo={background.photo}
        />
      </footer>
  </React.StrictMode>
)
