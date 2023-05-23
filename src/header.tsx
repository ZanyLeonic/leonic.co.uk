import React from "react";
import { Link, useLocation } from "react-router-dom";
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

function Header() {

  const location = useLocation();

  document.addEventListener("DOMContentLoaded", function () {
    M.Sidenav.init(document.querySelectorAll(".sidenav"), {});
  });

  return (
    <header>
      <nav className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="#" data-target="mobile-sidenav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <a href="#!" className="brand-logo">
              leonic.co.uk
            </a>
            <ul className="right hide-on-med-and-down" id="nav-items">
              {links.map((link, i) => (
                <li key={i} className={location.pathname === link.path ? "active" : ""}>
                  <Link to={link.path}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </nav>
      <ul className="sidenav" id="mobile-sidenav">
        {links.map((link, i) => (<li key={i} className={location.pathname === link.path ? "active" : ""}><Link className={`mobile-navItem`} to={link.path} onClick={() => {
          const sidebar = document.getElementById("mobile-sidenav")!;
          M.Sidenav.getInstance(sidebar).close();
        }}>
          {link.title}
        </Link></li>))}
      </ul>
    </header>
  );
}

export default Header;
