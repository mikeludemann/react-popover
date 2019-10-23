import React from 'react';
import logo from './logo.svg';
import './App.css';
import Popover from './components/popover';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="content">
        <Popover 
          defaultText="Hello"
          popoverText="I'm here"
          position="top"
        ></Popover>
      </section>
      <footer className="App-footer">
        (c) Copyright - Mike Ludemann
      </footer>
    </div>
  );
}

export default App;
