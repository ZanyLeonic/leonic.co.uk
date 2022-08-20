import React, { useContext } from "react";
import Carousel from "react-material-ui-carousel";

import Home from "./home";
import Projects from "./projects";

import { IndexContext } from "./sharedContext";

import "./sass/main-card.scss";
function MainCard() {
  const indexContext = useContext(IndexContext);

  return (
    <div className="card hoverable white-text max-w-xl w-full">
      <Carousel
        autoPlay={false}
        swipe={false}
        indicators={false}
        animation="slide"
        cycleNavigation={false}
        navButtonsAlwaysInvisible={true}
        index={indexContext.value!}
        duration={750}
      >
        <Home
          updateIndex={(index) => {
            indexContext.setValue(index);
          }}
        />
        <Projects />
      </Carousel>
    </div>
  );
}

export default MainCard;
