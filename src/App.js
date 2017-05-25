import React, { Component } from 'react';
import firebase from 'firebase';
import axios from 'axios';
import Home from './Home';
import DeveloperLogIn from './DeveloperLogIn';
import DeveloperInput from './DeveloperInput';
import DeveloperProfile from './DeveloperProfile';
import StudentLogIn from './StudentLogIn';
import Student from './Student';
import StudentProfile from './StudentProfile';
import LinkToStudents from './LinkToStudents';
import Err from './Err';
import base from './rebase';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

window.base = base;

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: {}
    }
  }


  githublogin (){
    var authHandler = (error, data) => {
      console.log('user', data.user)
      this.setState({
        user: data.user
      })
    }
    //basic
    base.authWithOAuthPopup('github', authHandler);
  }




  render() {
    console.log(this.state.user);
    // let loggedin = this.state.user ? true : null
    // console.log(loggedin);
    return (
      <Router>
        <div>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/developerinput">DeveloperInput</Link></li>
            <li><Link to="/developerprofile">Developer Profile</Link></li>
            <li><Link to="/student">Student</Link></li>
            <li><Link to="/studentprofile">Student Profile</Link></li>
            <li><Link to="/linktostudents">Link to Students</Link></li>
          </ul>

          <Route exact path="/" component={Home} />
          {/* <Route path="/developerinput" render={(pickles) => (loggedin ? <DeveloperInput logOut={this.logOut} /> : <Err />)} /> */}
          <Route path="/developerprofile" component={DeveloperProfile} />
          <Route path="/developerinput" component={DeveloperInput} />
          <Route path="/student" component={Student} />
          <Route path="/studentprofile" component={StudentProfile} />
          <Route path="/linktostudents" component={LinkToStudents} />
          <Route path="/developerlogin" component={DeveloperLogIn} />
          {/* <Route path="/developerlogin" render={(pickles) => (this.state.user ? (<Redirect to="/developerinput" />):(
          <DeveloperLogIn githubLogin={this.githubLogin} logOut={this.logOut}{...pickles} /> ))} /> */}
          <Route path="/studentlogin" component={StudentLogIn} />
        </div>
      </Router>

    );
  }
}

export default App;
