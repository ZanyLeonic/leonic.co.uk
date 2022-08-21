import React from "react";
import { NavLink } from "react-router-dom";
import "./sass/header.scss";
import M from "materialize-css";

const links = [
  {
    title: "Home",
    path: "/",
    icon: "home",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: "folder_special",
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
        <nav className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo">
                leonic.co.uk
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
        </nav>
      </header>
    );
  }
}

export default Header;
