import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import INTERNALLINKS from './internallinks';

import iconContact from '../../assets/images/000-email.svg';
import iconLinkedin from '../../assets/images/010-linkedin.svg';
import iconWhatsapp from '../../assets/images/003-whatsapp.svg';

const linkStyle = 'f6 fw4 hover-white no-underline white-70 ml2 pv1 pl1 grow';
const imageStyle = 'w2 br-100 b--white ba';

class Internallink extends Component {
  render() {

    const { title, image, link, linkStyle, imageStyle } = this.props.internallink;

    return(
      <NavLink className={ linkStyle } to={link}>
        <img
          src={image}
          className={imageStyle + " bg-black-70"}
          alt={title}
        />
      </NavLink>
    )
  }
}

class Internallinks extends Component {
  render() {
    return(
      <>
        {
          INTERNALLINKS.map(INTERLINK => {
            return (
              <Internallink key={INTERLINK.id} internallink={INTERLINK} />
            )
          })
        }
      </>
    )
  }
}

const TopNav = () => (
  <nav className="cf">
    <Internallinks />    
    <a
      className={ linkStyle + ' dib'}
      href="https://www.linkedin.com/in/andrew-zacharias/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={iconLinkedin}
        className={imageStyle + " bg-white-70"}
        alt="Andrew's Linkedin"
      />
    </a>
    <a
      className={ linkStyle + ' dib'}
      href="mailto:andyzack@gmail.com?subject=andyzack.github.io feedback&body=Your Site looks awesome!"
      rel="noopener noreferrer"
    >
      <img
        src={iconContact}
        className={imageStyle + " bg-white-70"}
        alt="Email"
      />
    </a>
    <a
      className={ linkStyle + ' dib'}
      href="tel:&#43;&#54;&#49;&#52;&#54;&#56;&#51;&#54;&#54;&#56;&#50;&#48;"
      rel="noopener noreferrer"
    >
      <img
        src={iconWhatsapp}
        className={imageStyle + " bg-white-70"}
        alt="Phone"
      />
    </a>
  </nav>
);

export default TopNav;