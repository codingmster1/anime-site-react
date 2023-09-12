import React from "react";
import "./Footer.css";
import footerLogo from '../assets/skull.gif';
import { Link } from 'react-router-dom';


const  Footer = () => {
  return (
   
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer__container">
            <Link to="/#nav">
              <figure className="footer__logo--wrapper">
                <img
                  src={footerLogo}
                  className="footer__logo"
                  alt=""
                />
              </figure>
            </Link>
            <div className="footer__link--list">
              <div className="footer__link">
                <Link to ="/#nav" className="footer__link--anchor link__hover">
                  Home
                </Link>
              </div>
              <div className="footer__link">
                <Link to="/#search" className="footer__link--anchor link__hover">
                  Search
                </Link>
              </div>
              <div className="footer__link">
                
                  <Link to="/#trending"
                  className="footer__link--anchor link__hover"
                >
                  Trending
                </Link>
              </div>
              <div className="footer__link">
                <Link to ="#popular" className="footer__link--anchor link__hover">
                  Popular
                </Link>
              </div>
            </div>
            <div className="footer__copyright">
              Copyright &copy; 2023 Jeff Doyle
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default Footer;