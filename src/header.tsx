import React from "react";
import { NavLink } from "react-router-dom";
import "./sass/header.scss";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Projects",
    path: "/projects",
  },
];

class Header extends React.Component {
  componentDidMount(): void {
    document.addEventListener("DOMContentLoaded", function () {
      M.Sidenav.init(document.querySelectorAll(".sidenav"), {});
    });
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
                {links.map((link, i) => {
                  return (
                    <li key={i}>
                      <NavLink
                        to={link.path}
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        <a href="#">{link.title}</a>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>
        <ul className="sidenav sidenav-close" id="mobile-navigation">
          {links.map((link, i) => {
            return (
              <li key={i}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <a href="#">{link.title}</a>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </header>
    );
  }
}

export default Header;
