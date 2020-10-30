import React from 'react';
import logo from './logo.svg';
import './App.css';
import characterSheet from './components/characterSheet/CharacterSheet';

function App() {
  return (
    <div className="App">
      {characterSheet}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          mcFuckit
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
