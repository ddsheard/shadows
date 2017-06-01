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
      {/* <Route path="/home" render={(pickles) => <Home clickedOnDev={this.clickedOnDev.bind(this)} clickedOnStudent={this.clickedOnStudent.bind(this)}  />} /> */}
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
      {/* <Route path="/" render={(pickles) => this.loggedOutofSite()} /> */}
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
    // console.log(this.state.user);
    // let loggedin = this.state.user ? true : null
    // console.log(loggedin);
    return (
      <Router>
        <div>
          <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            {/* <li onClick={this.loggedOutofSite.bind(this)}>Logout</li> */}
            <li onClick={this.logout.bind(this)}>Logout</li>

            {/* <li><Link to="/developerinput">DeveloperInput</Link></li>
            <li><Link to="/developerprofile">Developer Profile</Link></li>
            <li><Link to="/studentinput">StudentInput</Link></li>
            <li><Link to="/studentprofile">Student Profile</Link></li>
            <li><Link to="/linktostudents">Link to Students</Link></li>
            <li><Link to="/addstuform.js"> Student Form</Link></li> */}
          </ul>
        </nav>
        {this.routes()}

            {/* this.state.user.uid ?
            (<Redirect to="/developerinput" />)  : (<Home clickedOnDev={this.clickedOnDev.bind(this)} />) )
            } /> */}


          {/* <Route path="/home" render={(pickles) => <Home clickedOnDev={this.clickedOnDev.bind(this)} clickedOnStudent={this.clickedOnStudent.bind(this)}  />} /> */}






          {/* <Route path="/developerlogin" render={(pickles) => (this.state.user ? (<Redirect to="/developerinput" />):(
          <DeveloperLogIn githubLogin={this.githubLogin} logOut={this.logOut}{...pickles} /> ))} /> */}
          {/* <Route path="/studentlogin" render={(pickles) => <StudentLogIn githublogin={this.githublogin.bind(this)} user={this.state.user} logout={this.logOut.bind(this)} {...pickles}/>} /> */}

        </div>
      </Router>
    );
  }
}

//
// path="/..../${this.state.user.uid}"

export default App;

// logout Home loggedOutofSite={this.props.loggedOutofSite}

////////////// New login

// this.props.history.push(`/developerinput/`);


  ///////////////

  //componentDidMount(){
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
///////////////////////////////////////////////////////////////
//The code below is the old login
  //   base.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       console.log('User is signed in', user);
  //       base.syncState({
  //         firebaseUser: user
  //       })
  //     }
  //   });
  // }
  //
  // githublogin (){
  //   var authHandler = (error, data) => {
  //     console.log('I am inside the auth handler', data)
  //     // THIS IS SETTING THE STATE this.setState
  //     this.setState({
  //       githubUser: data.user,
  //       token: data.credential.accessToken
  //     })
  //     this.getData();
  //   }
  //   //basic
  //   base.authWithOAuthPopup('github', authHandler);
  // }
  //
  // logOut () {
  //   console.log('Log Out');
  //   base.unauth()
  // }
  //
  // getData() {
  //   const user = this.state.githubUser;
  //   console.log('inside of getData()', user);
  //   axios.get(`https://api.github.com/user?access_token=${this.state.token}`).then(response => {
  //     this.setState({user: response.data})})
  // }
  // End of the old login
  //////////////////////////////////////////////////////////////////////////////////////////////////

  {/* <Route path="/developerinput" render={(pickles) => (loggedin ? <DeveloperInput logOut={this.logOut} /> : <Err />)} /> */}
  {/* <Route path="/developerlogin" component={DeveloperLogIn} /> */}
