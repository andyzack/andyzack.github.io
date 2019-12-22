import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>A passionate front-end web developer</p>
				<a
					className="App-link no-underline"
					href="https://www.linkedin.com/in/andrew-zacharias/"
					target="_blank"
					rel="noopener noreferrer"
				>
					&lt;div &#123;...HelloWorld&#125; /&gt;
				</a>
      </header>
    </div>
  );
}

export default App;
