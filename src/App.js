import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import photograph from './assets/images/profile-pic-original.jpg';
import autograph from './assets/images/andrew-az.png';
import './assets/sass/App.scss';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

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
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
		<div className="App">
			<header className="App-header">
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

			</header>
		</div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default App;
