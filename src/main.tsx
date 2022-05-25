import React from "react";
import ReactDOM from "react-dom/client";
import { support_format_webp } from "./util";
import config from "./config.json";

import "materialize-css/sass/materialize.scss";
import "materialize-css";
import "material-icons/iconfont/material-icons.css";
import "@fontsource/raleway";

import "./sass/ext/dark-theme.scss";
import "./sass/ext/scanlines.scss";

import "./sass/index.scss";

import MainCard from "./main-card";
import Footer from "./footer";

import "./sass/ie11.scss";

const backgrounds = config.backgrounds;
const background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
const webp = support_format_webp();

/* Return to DOM lol */
var css = document.createElement("style") as HTMLStyleElement;
css.type = "text/css";

css.appendChild(
  document.createTextNode(
    `.background-image { 
      background-image: url(${webp ? background.url_webp : background.url}); 
    } 
    .card::before { 
      background-image: url(${webp ? background.url_webp : background.url}); 
    }`
  )
);

document.getElementsByTagName("head")[0].appendChild(css);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main>
      <div className="background-image scanlines"></div>
      <div className="container">
        <div className="row">
          <MainCard />
        </div>
      </div>
    </main>
    <Footer
      author={background.author}
      authorURL={background.author_url}
      photo={background.photo}
    />
  </React.StrictMode>
);
