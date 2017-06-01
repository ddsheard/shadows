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
  Switch,
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
      type: ''
    }
    //Input fields for Dev and student -firebase
    // this.addDeveloperInput = this.addDeveloperInput.bind(this);
    // this.addStudentInput = this.addStudentInput.bind(this);

  }


  // addDeveloperInput(dev) {
  //   //update our devs state
  //   const devs = {...this.state.devs};
  //   //add in our new dev
  //   const timestamp = Date.now();
  //   devs[`dev-${timestamp}`] = dev;
  //   //set state
  //   this.setState({devs});
  // }
  //
  // addStudentInput(stu) {
  //   // Update Students State
  //   const stud = {...this.state.stud};
  //   // Add in New Student
  //   const timestamp = Date.now();
  //   stud[`stu-${timestamp}`] = stu;
  //   // Set Student State
  //   this.setState({stud});
  // }

  //   base.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       console.log('User is signed in', user);
  //       base.syncState({
  //         firebaseUser: user
  //       })
  //     }
  //   });
  // }

  clickedOnDev(){
    this.loggedInAs("developer");
  }

  clickedOnStudent(){
    this.loggedInAs("student");
  }

 loggedInAs(type){
      var authHandler = (error, data) => {
        console.log('I am inside the auth handler', data)
        console.log(error);
        // THIS IS SETTING THE STATE this.setState
        this.setState({
          user: data.user,
          token: data.credential.accessToken,
          type: type
        })
        // this.getData();
        console.log(this.state.user);

        axios.get('https://api.github.com/user?access_token=' + data.credential.accessToken).
        then(response => {
          this.setState({user: {...this.state.user, ...response.data}})

          })
      }
      //basic
      base.authWithOAuthPopup('github', authHandler);
      // this.props.history.push(`/developerinput/`);
    }

    mainLogIn () {
      if (this.state.type === 'developer') {
       return (<Redirect to="/developerinput" />)
     } else {
       return (<Redirect to="/studentinput" />)
     }
  }

  loggedOutofSite () {
    if (!this.state.user.uid ){
      console.log('test js');
      return(<Redirect to={ { pathname: '/' } } />)
    } else {
      return null
    }
  }

  logout() {
    console.log('clicked');
    base.unauth()
    this.setState({
      user: {}
    })
  }

// a function that returns jsx
   normalRoutes() {
     return (
    <Switch>
      <Route exact path="/home" render={(pickles) => this.mainLogIn()} />
      <Route path="/home" render={(pickles) => <Home mainLogIn={this.mainLogIn} /> } />
      <Route path="/developerprofile" component={DeveloperProfile} />
      <Route path="/developerinput" render={(pickles) => <DeveloperInput addDeveloperInput={this.addDeveloperInput} /> } />
      <Route path="/studentinput" render={(pickles) => <StudentInput addStudentInput={this.addStudentInput} /> } />
      <Route path="/studentprofile" component={StudentProfile} />
      <Route path="/linktostudents" component={LinkToStudents} />
      <Route path="/developerlogin" render={(pickles) => <DeveloperLogIn developerId={this.props.developerId} />} />
      <Route path="/studentlogin" render={(pickles) =>
      <StudentLogIn studentId={this.props.studentId} />} />
    </Switch>
  )}

  forceAuthRoutes() {
    return (
    <Switch>
      <Route path="/home" render={(pickles) => <Home clickedOnDev={this.clickedOnDev.bind(this)} clickedOnStudent={this.clickedOnStudent.bind(this)}  />} />
      <Redirect to="/home" />
    </Switch>
  )}

  routes () {
    console.log('wtf');
    if (this.state.user.uid) {
      return this.normalRoutes()
    } else {

      return this.forceAuthRoutes()
  } }

  render() {
    console.log(this.state.user);

    return (
      <Router>
        <div>
          <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li onClick={this.logout.bind(this)}>Logout</li>
          </ul>
        </nav>
        {this.routes()}
        </div>
      </Router>
    );

  }
}

export default App;
