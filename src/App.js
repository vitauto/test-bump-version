import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  console.log('Frontend version : ', process.env.REACT_APP_VERSION);
  // console.log('Frontend process.env : ', process.env);
  console.log('node env : ', process.env.NODE_ENV);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
