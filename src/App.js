import React, { Component } from 'react';
import firebase from 'firebase';
import axios from 'axios';
import Home from './Home';
import DeveloperLogIn from './DeveloperLogIn';
import DeveloperInput from './DeveloperInput';
import DeveloperProfile from './DeveloperProfile';
import StudentLogIn from './StudentLogIn';
import StudentInput from './StudentInput';
import StudentProfile from './StudentProfile';
import LinkToStudents from './LinkToStudents';
// import Err from './Err';
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
      user: {},
      devs: {}
    }
    this.addDeveloperInput = this.addDeveloperInput.bind(this);
  }

  addDeveloperInput(dev) {
    //update our devs state
    const devs = {...this.state.devs};
    //add in our new dev
    const timestamp = Date.now();
    devs[`dev-${timestamp}`] = dev;
    //set state
    this.setState({devs});
  }

  componentDidMount(){
    // base.auth().onAuthStateChanged(user => {
    //   if(user){
    //     this.setState({
    //       user: user
    //     })
    //     base.syncState(`/attraction/${this.props.match.params.id}/comments`, {
    //       context: this,
    //       state: "comments",
    //       asArray: true
    //     })
    //   } else {
    //     this.setState({
    //       user: {},
    //       comments: {}
    //     })
    //   }
    // })

    base.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('User is signed in', user);
        base.syncState({
          firebaseUser: user
        })
      }
    });
  }

  githublogin (){
    var authHandler = (error, data) => {
      console.log('I am inside the auth handler', data)
      // THIS IS SETTING THE STATE this.setState
      this.setState({
        githubUser: data.user,
        token: data.credential.accessToken
      })
      this.getData();
    }
    //basic
    base.authWithOAuthPopup('github', authHandler);
  }

  logOut () {
    console.log('Log Out');
    base.unauth()
  }

  getData() {
    const user = this.state.githubUser;
    console.log('inside of getData()', user);
    axios.get(`https://api.github.com/user?access_token=${this.state.token}`).then(response => {
      this.setState({user: response.data})})
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
            <li><Link to="/studentinput">StudentInput</Link></li>
            <li><Link to="/studentprofile">Student Profile</Link></li>
            <li><Link to="/linktostudents">Link to Students</Link></li>
          </ul>

          <Route exact path="/" component={Home} />
          {/* <Route path="/developerinput" render={(pickles) => (loggedin ? <DeveloperInput logOut={this.logOut} /> : <Err />)} /> */}
          <Route path="/developerprofile" component={DeveloperProfile} />
          <Route path="/developerinput" render={(pickles) => <DeveloperInput addDeveloperInput={this.addDeveloperInput} /> } />
          <Route path="/studentinput" component={StudentInput} />
          <Route path="/studentprofile" component={StudentProfile} />
          <Route path="/linktostudents" component={LinkToStudents} />
          <Route path="/developerlogin" component={DeveloperLogIn} />
          {/* <Route path="/developerlogin" render={(pickles) => (this.state.user ? (<Redirect to="/developerinput" />):(
          <DeveloperLogIn githubLogin={this.githubLogin} logOut={this.logOut}{...pickles} /> ))} /> */}
          <Route path="/studentlogin" render={(pickles) => <StudentLogIn githublogin={this.githublogin.bind(this)} user={this.state.user} logout={this.logOut.bind(this)} {...pickles}/>} />
        </div>
      </Router>
    );
  }
}

//
// path="/..../${this.state.user.uid}"

export default App;
