import React from 'react';
import { HashRouter as Router, Link } from "react-router-dom";

import iconHome from '../../assets/images/000-home.svg';
import iconAbout from '../../assets/images/000-user-3.svg';
import iconGallery from '../../assets/images/000-internet.svg';
import iconResume from '../../assets/images/000-document-1.svg';
import iconContact from '../../assets/images/000-email.svg';
import iconLinkedin from '../../assets/images/010-linkedin.svg';
import iconWhatsapp from '../../assets/images/003-whatsapp.svg';

const TopNav = () => (
<Router>
  <nav className="cf">
    <Link className="f6 fw4 hover-white no-underline white-70 dib-ns ml2 pv1 pl1 grow aaz-home dn" to="/">
      <img
        src={iconHome}
        className="aaz-icon-home w2 bg-black-70 br-100 b--white ba"
        alt="Home"
      />
    </Link>
    <Link className="f6 fw4 hover-white no-underline white-70 dib ml2 pv1 pl1 grow" to="/About">
      <img
        src={iconAbout}
        className="aaz-icon-about w2 bg-white-70 br-100 b--white ba"
        alt="About me"
      />
    </Link>
    <Link className="f6 fw4 hover-white no-underline white-70 dib ml2 pv1 pl1 grow" to="/Gallery">
      <img
        src={iconGallery}
        className="aaz-icon-gallery w2 bg-white-70 br-100 b--white ba"
        alt="Gallery"
      />
    </Link>
    <Link className="f6 fw4 hover-white no-underline white-70 dib-ns ml2 pv1 pl1 grow dn" to="/Resume">
      <img
        src={iconResume}
        className="aaz-icon-resume w2 bg-white-70 br-100 b--white ba"
        alt="Resume"
      />
    </Link>
    
    <a
      className="f6 fw4 hover-white no-underline white-70 dib ml2 pv1 pl1 grow"
      href="https://www.linkedin.com/in/andrew-zacharias/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={iconLinkedin}
        className="aaz-icon-linkedin w2 bg-white-70 br-100 b--white ba"
        alt="Andrew's Linkedin"
      />
    </a>
    <a
      className="f6 fw4 hover-white no-underline white-70 dib ml2 pv1 pl1 grow"
      href="mailto:andyzack@gmail.com?subject=andyzack.github.io feedback&body=Your Site looks awesome!"
      rel="noopener noreferrer"
    >
      <img
        src={iconContact}
        className="aaz-icon-linkedin w2 bg-white-70 br-100 b--white ba"
        alt="Email"
      />
    </a>
    <a
      className="f6 fw4 hover-white no-underline white-70 dib ml2 pv1 pl1 grow"
      href="tel:&#43;&#54;&#49;&#52;&#54;&#56;&#51;&#54;&#54;&#56;&#50;&#48;"
      rel="noopener noreferrer"
    >
      <img
        src={iconWhatsapp}
        className="aaz-icon-linkedin w2 bg-white-70 br-100 b--white ba"
        alt="Phone"
      />
    </a>
  </nav>
</Router>
);

export default TopNav;