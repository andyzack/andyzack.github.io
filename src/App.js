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
import iconContact from './assets/images/000-email.svg';
import iconLinkedin from './assets/images/010-linkedin.svg';
import iconFacebook from './assets/images/001-facebook.svg';
import iconWhatsapp from './assets/images/003-whatsapp.svg';
import './assets/sass/App.scss';

function App() {
  return (
    <Router>
      <div className="pa0 ma0">
        <header className="bg-black fixed w-100">
          <div className="mw8 w-100 center dt">
            <div className="white dtc tl v-mid">
            <Link className="App-link no-underline fl pa2 grow" to="/">
              <img
                src={logo}
                className="w4"
                alt="AAZ"
              />
            </Link>
            </div>
            <div className="white dtc tr v-mid cf">
              <ul className="dt ma0 pa0 fr">
                <li className="dtc ma0 pr2 v-mid">
                  <Link className="white no-underline fl grow" to="/About">
                  <img
                      src={iconAbout}
                      className="App-icon-linkedin w2 bg-white-70 br-100 b--white ba"
                      alt="Andrew's Linkedin"
                    />
                  </Link>
                </li>
                <li className="dtc ma0 pr2 v-mid">
                  <Link className="white no-underline fl grow" to="/Gallery">
                  <img
                      src={iconGallery}
                      className="App-icon-linkedin w2 bg-white-70 br-100 b--white ba"
                      alt="Andrew's Linkedin"
                    />
                  </Link>
                </li>
                <li className="dtc ma0 pr2 v-mid">
                  <a
                    className="white no-underline fl grow"
                    href="https://www.linkedin.com/in/andrew-zacharias/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={iconLinkedin}
                      className="App-icon-linkedin w2 bg-white-70 br-100 b--white ba"
                      alt="Andrew's Linkedin"
                    />
                  </a>
                </li>
                <li className="dtc ma0 pr2 v-mid">
                  <a
                    className="App-link no-underline fl grow"
                    href="mailto:andyzack@gmail.com"
                    rel="noopener noreferrer"
                  >
                  <img
                      src={iconContact}
                      className="App-icon-linkedin w2 bg-white-70 br-100 b--white ba"
                      alt="Andrew's Linkedin"
                    />
                  </a>
                </li>
                <li className="dtc ma0 pr2 v-mid">
                  <a
                    className="white no-underline fl grow"
                    href="https://www.facebook.com/andrewazweb/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={iconFacebook}
                      className="App-icon-facebook w2 bg-white-70 br-100 b--white ba"
                      alt="Andrew's Facebook"
                    />
                  </a>
                </li>
                <li className="dtc ma0 pr2 v-mid">
                  <a
                    className="white no-underline fl grow"
                    href="tel:&#43;&#54;&#49;&#52;&#54;&#56;&#51;&#54;&#54;&#56;&#50;&#48;"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={iconWhatsapp}
                      className="App-icon-linkedin w2 bg-white-70 br-100 b--white ba"
                      alt="Andrew's Phone"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
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

        <footer className="fixed w-100 bottom-0">
          <div className="mw8 w-100 center dt">
            <div className="white-50 dtc tc v-mid pa2">
            © 2019 andrewaz
            </div>
          </div>
        </footer>

      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
		<div className="App">
			<div className="App-container-home justify-center">
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
      <div className="App-container justify-top">
        <div className="mw8 w-100 center dt">
          <div className="pa2 pt5 tl">
            <article data-name="article-full-bleed-background">
              <div className="cf no-repeat bg-center cover w-100 banner-about">
                <div className="fl pr3 pr4-ns bg-white black-70 measure-narrow f3">
                  <header className="bb b--black-20 pv4">
                    <h3 className="f1 fw7 lh-title mt0 mb3 heading-font fw7">about me</h3>
                    <h4 className="f3 fw4 lh-title ma0">I'm a creative front‑end developer based in Melbourne, Australia.</h4>
                  </header>
                  <section className="pv4">
                    <p className="lh-copy measure f4 mt0">
                    I enjoy building beautiful web pages focused on crafting clean html and delivering user‑friendly experiences.
                    <br /><br />
                    I believe in joining hands in making things that can a make a difference!
                    <br /><br />
                    I could work on any applications written in any languages, be it java play, react, angular, asp or php, quickly adapt to the workflow and work well with the team to get it built.
                    </p>  
                  </section>
                </div>
              </div>
            </article>
            <div className="bb b--black-20 mv3"></div>
            <article data-name="article-full-bleed-background">
              <div className="cf no-repeat bg-center cover w-100 banner-reveleus">
                <div className="fl pr3 pr4-ns bg-white black-70 measure-narrow f3">
                  <header className="bb b--black-70 pv4">
                    <h3 className="f1 fw7 lh-title mt0 mb3 heading-font fw7">start ups</h3>
                    <h4 className="f3 fw4 lh-title ma0">I'm highly motivated and have a solid track record working for start ups.</h4>
                  </header>
                  <section className="pv4">
                    <p className="lh-copy measure f4 mt0">
                    I've worked for 'start up' companies in Ireland and India, helped them grow into a world-class leader in their respective domain.
                    <br /><br />
                    In the last company, Cartrawler, where I served for 13 years, I've played a key part in the integration of car hire booking engine for top airlines, hotels and travel agents.
                    <br /><br />
                    I'm a former employee of i-flex solutions limited now Oracle Financial Services Software Limited, I was part of the transition of Reveleus Operational Risk Product from Capco, a global management and technology consultancy company, in 2005 (startup at that time).
                    </p>  
                  </section>
                </div>
              </div>
            </article>
            
          </div>
        </div>
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
