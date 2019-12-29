import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import photograph from './assets/images/profile-pic-original.jpg';
import autograph from './assets/images/andrew-az.png';
import logo from './assets/images/logo.png';
import iconAbout from './assets/images/000-user-3.svg';
import iconGallery from './assets/images/000-picture-1.svg';
import iconResume from './assets/images/000-document-1.svg';
import iconContact from './assets/images/000-email.svg';
import iconLinkedin from './assets/images/010-linkedin.svg';
import iconFacebook from './assets/images/001-facebook.svg';
import iconTwitter from './assets/images/013-twitter-1.svg';
import iconWhatsapp from './assets/images/003-whatsapp.svg';
import './assets/sass/App.scss';

function App() {
  return (
    <Router>
      <div className="pa0 ma0">
        <div className="white fixed left-1 top-1">
				<Link className="App-link no-underline fl pa1" to="/">
          <img
            src={logo}
            className="w3"
            alt="AAZ"
          />
				</Link>
        </div>
        <ul className="fixed right-1 top-1 dt ma0 pa0 tr">
          <li className="dtc ma0 pr2">
            <Link className="white no-underline fl" to="/About">
            <img
                src={iconAbout}
                className="App-icon-linkedin w2 bg-white-70 br-100"
                alt="Andrew's Linkedin"
              />
            </Link>
          </li>
          <li className="dtc ma0 pr2">
            <Link className="white no-underline fl" to="/Gallery">
            <img
                src={iconGallery}
                className="App-icon-linkedin w2 bg-white-70 br-100"
                alt="Andrew's Linkedin"
              />
            </Link>
          </li>
          <li className="dtc ma0 pr2">
            <a
              className="App-link no-underline fl"
              href="../assets/docs/andrew-new.pdf"
              rel="noopener noreferrer"
            >
            <img
                src={iconResume}
                className="App-icon-linkedin w2 bg-white-70 br-100"
                alt="Andrew's Linkedin"
              />
            </a>
          </li>
          <li className="dtc ma0 pr0">
            <a
              className="App-link no-underline fl"
              href="mailto:andyzack@gmail.com"
              rel="noopener noreferrer"
            >
            <img
                src={iconContact}
                className="App-icon-linkedin w2 bg-white-70 br-100"
                alt="Andrew's Linkedin"
              />
            </a>
          </li>
        </ul>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>

        <div className="white-50 fixed center left-1 bottom-1">
        © 2019 andrewaz
        </div>
        <ul className="fixed right-1 bottom-1 dt ma0 pa0 tr">
          <li className="dtc ma0 pr2">
            <a
              className="App-link no-underline fl"
              href="https://www.linkedin.com/in/andrew-zacharias/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={iconLinkedin}
                className="App-icon-linkedin w2 bg-white-70 br-100"
                alt="Andrew's Linkedin"
              />
            </a>
          </li>
          <li className="dtc ma0 pr2">
            <a
              className="App-link no-underline fl"
              href="https://www.facebook.com/andrewazweb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={iconFacebook}
                className="App-icon-facebook w2 bg-white-70 br-100"
                alt="Andrew's Facebook"
              />
            </a>
          </li>
          <li className="dtc ma0 pr2">
            <a
              className="App-link no-underline fl"
              href="https://www.facebook.com/andrewazweb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={iconTwitter}
                className="App-icon-facebook w2 bg-white-70 br-100"
                alt="Andrew's Twitter"
              />
            </a>
          </li>
          <li className="dtc ma0 pr0">
            <a
              className="App-link no-underline fl"
              href="tel:&#43;&#54;&#49;&#52;&#54;&#56;&#51;&#54;&#54;&#56;&#50;&#48;"
              rel="noopener noreferrer"
            >
              <img
                src={iconWhatsapp}
                className="App-icon-linkedin w2 bg-white-70 br-100"
                alt="Andrew's Phone"
              />
            </a>
          </li>
        </ul>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
		<div className="App">
			<div className="App-container">
				<div className="App-photograph">
					<img
						src={photograph}
						className="App-photograph"
						alt="Andrew's Photograph"
					/>
				</div>
				<div className="pt3">
					<img
						src={autograph}
						className="App-autograph"
						alt="Andrew's Autograph"
					/>
				</div>
				<p>A passionate front-end web developer</p>
				<Link className="App-link no-underline" to="/about">
					&lt;div &#123;...HelloWorld&#125; /&gt;
				</Link>

			</div>
		</div>
  );
}

function About() {
  return (
    <div className="App">
      <div className="App-container">
        <h2>About</h2>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <div className="App">
      <div className="App-container">
        <h2>Gallery</h2>
      </div>
    </div>
  );
}

function Resume() {
  return (
    <div className="App">
      <div className="App-container">
        <h2>Resume</h2>
      </div>
    </div>
  );
}

export default App;
