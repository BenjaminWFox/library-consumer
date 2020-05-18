import React from 'react';
import logo from './logo.svg';
import { Button, Message } from 'component-library'
import 'component-library/lib/index.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Button otherText="World">Hello</Button>
        </p>
        <div>
          <Message />
        </div>
      </header>
    </div>
  );
}

export default App;