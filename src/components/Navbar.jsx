import React from "react";

function Navbar() {
  return (
    <header className="navbar-container">
      <nav className="navbar">
        <ul className="nav-ul">
          <li className="nav-link">
            <a href="">Naslovnica</a>
          </li>
          <li className="nav-link">
            <a href="">O školi</a>
          </li>
          <li className="nav-link">
            <a href="">Kontakt</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
