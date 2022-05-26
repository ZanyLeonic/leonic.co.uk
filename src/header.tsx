import { Component } from "react";
import M from "materialize-css";

import "./sass/header.scss";

class Header extends Component {
  constructor(props: {}) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      M.Sidenav.init(document.querySelectorAll(".sidenav"), {});
    });

    const elems = document.querySelectorAll("[data-nav]");
    const tabControl = M.Tabs.getInstance(
      document.getElementById("tabs") as HTMLElement
    );

    for (var i = 0; i < elems.length; i++) {
      elems[i].addEventListener("click", (e) => {
        if (e.target == null) return;
        const tabControl = M.Tabs.getInstance(
          document.getElementById("tabs") as HTMLElement
        );
        e.preventDefault();

        const eleTarget = e.target as HTMLElement;

        tabControl.select(eleTarget.getAttribute("data-nav") as string);
      });
    }
  }

  render() {
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
}

export default Header;
