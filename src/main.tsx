import React, { useState } from "react";
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

import "./sass/ie11.scss";
import App from "./app";
import { BrowserRouter } from "react-router-dom";

const backgrounds = config.backgrounds;
const background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
const webp = support_format_webp();

/* Return to DOM lol */
var css = document.createElement("style") as HTMLStyleElement;
css.type = "text/css";

css.appendChild(
  document.createTextNode(
    `.background-image { 
      background-image: url(${background.base_url}.${webp ? "webp" : "jpg"}); 
    } 
    .card::before { 
      background-image: url(${background.base_url}.${webp ? "webp" : "jpg"}); 
    }
    .blurred-panel {
      background-image: url(${background.base_url}.blur.${webp ? "webp" : "jpg"}); 
    }`
  )
);

document.getElementsByTagName("head")[0].appendChild(css);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App background={background} userInfo={config.user_info} />
    </BrowserRouter>
  </React.StrictMode>
);
