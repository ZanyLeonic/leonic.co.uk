import { Component, useContext } from "react";

import "./sass/header.scss";
import { IndexContext } from "./sharedContext";

function Header() {
  const indexContext = useContext(IndexContext);

  return (
    <header>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">
              leonic.co.uk
            </a>
            <a
              href="#"
              data-target="mobile-navigation"
              className="sidenav-trigger"
            >
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down" id="nav-items">
              <li>
                <a href="#" data-nav="home">
                  Home
                </a>
              </li>
              <li>
                <a href="#" data-nav="projects">
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-navigation">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
