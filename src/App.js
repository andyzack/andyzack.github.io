import React from 'react';
import { useState } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import logo from './assets/images/logo.png';
import iconContact from './assets/images/000-email.svg';
import iconLinkedin from './assets/images/010-linkedin.svg';
import iconFacebook from './assets/images/001-facebook.svg';
import iconWhatsapp from './assets/images/003-whatsapp.svg';

import logoHtml5 from './assets/images/logo-html5.png';
import logoScsslogo from './assets/images/logo-scsslogo.png';
import logoA11y from './assets/images/logo-a11y.png';
import logoJavascriptlang from './assets/images/logo-javascriptlang.png';
import logoReact from './assets/images/logo-react.png';
import logoVue from './assets/images/logo-vue.png';
import logoAngularjs from './assets/images/logo-angularjs.png';
import logoGitlogo from './assets/images/logo-gitlogo.png';
import logoVscode from './assets/images/logo-vscode.png';

import './App.css';

import modules from './modules'; // All the parent knows is that it has modules ...

import './assets/sass/App.scss';

function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');

  return (
    <Router>
      <div className="App">
        <div className="cover bg-left bg-center-l aaz-banner-main">
          <div className="bg-black-80 pb3 pb4-m pb5-l">
            <header className="bg-white-10 relative z-999">
              <nav className="dt w-100 mw8 center">
                <div className="dtc w2 v-mid pa3-ns pa1">
                  <Link className="dib h2 pa1 grow-large border-box" to="/">
                    <img
                      src={logo}
                      className="w4-ns w3 mw-none"
                      alt="AAZ"
                    />
                  </Link>
                </div>
                <div className="dtc v-mid tr pa3-ns pa1">
                  {modules.map(module => ( // with a name, and routes
                  <span key={module.name} className={currentTab === module.name ? 'active' : ''}>
                    <Link className={module.linkStyle} to={module.routeProps.path} onClick={() => setCurrentTab(module.name)}>
                      <img
                        src={module.icon}
                        className={module.imgStyle}
                        alt={module.name}
                      />
                    </Link>
                  </span>
                  ))}
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
                  href="https://www.facebook.com/andrewazweb/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={iconFacebook}
                    className="aaz-icon-facebook w2 bg-white-70 br-100 b--white ba"
                    alt="Facebook"
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
                </div>
              </nav>
            </header>

            <div className="App-content---">
              {modules.map(module => (
                <Route {...module.routeProps} key={module.name} />
              ))}
            </div>
          </div>
        </div>
        <footer className="w-100 bg-black-60">
          <div className="mw8 w-100 center dt">
            <div className="tc db mt3">
              <img
                src={logoHtml5}
                className="aaz-icon-html5 w2 bg-black-30 br-100 b--dark-gray ba pa1 ma1"
                alt="HTML5"
              />
              <img
                src={logoScsslogo}
                className="aaz-icon-sass w2 bg-black-30 br-100 b--dark-gray ba pa1 ma1"
                alt="SASS"
              />
              <img
                src={logoA11y}
                className="aaz-icon-a11y w2 bg-black-30 br-100 b--dark-gray ba pa1 ma1"
                alt="A11y"
              />
              <img
                src={logoJavascriptlang}
                className="aaz-icon-javascript w2 bg-black-30 br-100 b--dark-gray ba pa1 ma1"
                alt="Javascript"
              />
              <img
                src={logoReact}
                className="aaz-icon-react w2 bg-black-30 br-100 b--dark-gray ba pa1 ma1"
                alt="React"
              />
              <img
                src={logoVue}
                className="aaz-icon-vue w2 bg-black-30 br-100 b--dark-gray ba pa1 ma1"
                alt="Vue"
              />
              <img
                src={logoAngularjs}
                className="aaz-icon-angularjs w2 bg-black-30 br-100 b--dark-gray ba pa1 ma1"
                alt="Angularjs"
              />
              <img
                src={logoGitlogo}
                className="aaz-icon-git w2 bg-black-30 br-100 b--dark-gray ba pa1 ma1"
                alt="Git"
              />
              <img
                src={logoVscode}
                className="aaz-icon-vscode w2 bg-black-30 br-100 b--dark-gray ba pa1 ma1"
                alt="VScode"
              />
            </div>
            <div className="white-50 tc v-mid pa2">
            © 2020 andrewaz
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
