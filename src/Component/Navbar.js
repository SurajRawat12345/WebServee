import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {ImCross} from 'react-icons/im';
import {ImMenu} from 'react-icons/im';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            <img className="logo-size-image" src="best-logo.png" alt="logo"></img>
            <div className="logo-name"> WebServee </div>
          </NavLink>

          <ul className={click ? "nav-menus active" : "nav-menus"}>
            <li className="nav-item">
              <NavLink
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            { click ? <ImCross/> : <ImMenu/>}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;