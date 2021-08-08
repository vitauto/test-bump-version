import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  console.log('Frontend version : ', process.env.REACT_APP_VERSION);
  console.log('node env : ', process.env.NODE_ENV);

  useEffect(() => {
    console.log(process.env.REACT_APP_VERSION);
  }, [process.env.REACT_APP_VERSION]);

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
