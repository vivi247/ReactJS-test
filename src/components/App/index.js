import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Intro from '../Intro';
import Series from '../../containers/Series'

class App extends Component {

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Intro message ="Here you can pass props message" />
        <Series />
      </div>
    );
  }
}

export default App;
