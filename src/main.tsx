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

import Header from "./header";
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

document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll("[data-navlink]");

  for (var i = 0; i < elems.length; i++) {
    elems[i].addEventListener("click", (e) => {
      if (e.target == null) return;
      const tabControl = M.Tabs.getInstance(
        document.getElementById("tabs") as HTMLElement
      );
      e.preventDefault();

      const eleTarget = e.target as HTMLElement;

      tabControl.select(eleTarget.getAttribute("data-navlink") as string);
    });
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <header>
      <Header />
    </header>
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
      copyrightOwner={config.user_info.name}
      photo={background.photo}
    />
  </React.StrictMode>
);
