import React, { Component } from 'react';
import axoios from 'axios';
import DeveloperProfile from './DeveloperProfile';
import base from './rebase';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

window.base = base;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p>hello</p>
      </div>
    );
  }
}

export default App;
