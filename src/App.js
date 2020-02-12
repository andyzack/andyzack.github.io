import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './assets/images/logo.png';

import ErrorBoundary from "./error-boundary";

import './assets/sass/App.scss';

const TopNav = React.lazy(() => import('./modules/TopNav'));
const Footer = React.lazy(() => import('./modules/Footer'));

const Home = React.lazy(() => import('./modules/Home'));
const About = React.lazy(() => import('./modules/About'));
const Gallery = React.lazy(() => import('./modules/Gallery'));
const Resume = React.lazy(() => import('./modules/Resume'));
const Cars = React.lazy(() => import('./modules/Cars'));

function App() {
  return (
    <Router>
      <div className="App">
        <div className="cover bg-left bg-center-l aaz-banner-main">
          <div className="bg-black-80 pb3 pb4-m pb5-l">
            <header className="bg-white-10">
              <div className="dt w-100 mw8 center relative z-999">
                <div className="dtc w2 v-mid ph3-ns ph1 pv1">
                  <Link className="dib pa1 grow-large border-box" to="/">
                    <img
                      src={logo}
                      className="w3-ns w2 mw-none"
                      alt="AAZ"
                    />
                  </Link>
                </div>
                <div className="dtc v-mid tr pa3-ns pa1">
                <ErrorBoundary fallback={"Couldn't catch menu!"}>
                  <React.Suspense fallback="loading menu...">
                    <TopNav />
                  </React.Suspense>
                </ErrorBoundary>
                </div>
              </div>
            </header>
            <div className="App-content">
              <ErrorBoundary fallback={"Couldn't catch modules!"}>
                <React.Suspense fallback="loading modules...">
                  <Switch>
                    <Route exact={true} path="/">
                      <Home />
                    </Route>
                    <Route path="/home">
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
                    <Route path="/cars">
                      <Cars />
                    </Route>
                  </Switch>
                </React.Suspense>
              </ErrorBoundary>
            </div>
          </div>
        </div>
        <ErrorBoundary fallback={"Couldn't catch footer!"}>
          <React.Suspense fallback="loading footer...">
            <Footer />
          </React.Suspense>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
