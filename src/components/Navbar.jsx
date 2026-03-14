import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar-container">
      <nav className="navbar">
        <ul className="nav-ul">
          <li className="nav-link">
            <NavLink to="/" end>
              Naslovnica
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/zanimanja">Zanimanja</NavLink>
          </li>
          <li className="nav-link">
            <a
              href="https://strukovna.com/kontakt/"
              target="_blank"
              rel="noreferrer"
            >
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
