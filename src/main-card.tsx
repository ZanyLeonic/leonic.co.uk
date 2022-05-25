import { Component } from "react";

import Home from "./home";

import "./sass/main-card.scss";
class MainCard extends Component {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <div className="main-content col s12 m8 offset-m2 l6 offset-l3">
        <div className="card hoverable white-text">
          <Home />
        </div>
      </div>
    );
  }
}

export default MainCard;
