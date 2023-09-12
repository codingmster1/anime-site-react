import React from "react";
import './Nav.css';
import navLogo from '../assets/2_all-the-anime-logo.png';
import navLogo2 from '../assets/behelit.png';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav" id="nav">
      <div className="nav__container">
        <Link to="/#nav">
          <figure className="nav__logo--wrapper">
            <img
              src={navLogo}
              className="nav__logo"
              alt=""
            />
            <img 
            src={navLogo2}
            className="nav__logo"
            alt=""
            />
          </figure>
        </Link>
        <div className="nav__link--list">
          <div className="nav__link">
            <Link to="/#nav" className="nav__link--anchor link__hover">
              Home
            </Link>
          </div>
          <div className="nav__link">
            <Link to href="/#search" className="nav__link--anchor link__hover">
              Search
            </Link>
          </div>
          <div className="nav__link">
            <Link to="/#trending" className="nav__link--anchor link__hover">
              Trending
            </Link>
          </div>
          <div className="nav__link">
            <Link to="/#popular" className="nav__link--anchor link__hover">
              Popular
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;