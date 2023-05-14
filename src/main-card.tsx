import Home from "./home";
import Projects from "./projects";

import "./sass/main-card.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Project from "./project";

function MainCard() {
  const location = useLocation();

  return (
    <div className="card main-card hoverable white-text w-auto w-full">
      
    </div>
  );
}

export default MainCard;
