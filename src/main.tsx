import React from "react";
import ReactDOM from "react-dom/client";
import MainCard from "./MainCard";

import "./index.scss";
import "./DarkTheme.scss";
import "material-icons/iconfont/material-icons.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="container">
      <div className="row">
        <MainCard />
      </div>
    </div>
  </React.StrictMode>
);
