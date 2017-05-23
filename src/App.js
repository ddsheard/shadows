import React, { Component } from 'react';
import axios from 'axios';
import Home from './Home';
import DeveloperLogIn from './DeveloperLogIn';
import Developer from './Developer';
import DeveloperProfile from './DeveloperProfile';
import StudentLogIn from './StudentLogIn';
import Student from './Student';
import StudentProfile from './StudentProfile';
import LinkToStudents from './LinkToStudents';
import base from './rebase';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

window.base = base;

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/developer">Developer</Link></li>
            <li><Link to="/developerprofile">Developer Profile</Link></li>
            <li><Link to="/student">Student</Link></li>
            <li><Link to="/studentprofile">Student Profile</Link></li>
            <li><Link to="/linktostudents">Link to Students</Link></li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/developer" component={Developer} />
          <Route path="/developerprofile" component={DeveloperProfile} />
          <Route path="/student" component={Student} />
          <Route path="/studentprofile" component={StudentProfile} />
          <Route path="/linktostudents" component={LinkToStudents} />
        </div>
      </Router>

      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p>hello</p>
      // </div>
    );
  }
}

export default App;
