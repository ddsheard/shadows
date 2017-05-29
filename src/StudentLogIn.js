import React, { Component } from 'react';
// import axios from 'axios';
import base from './rebase';

class StudentLogIn extends Component {

  constructor() {
    super();
    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.state = {
      uid: null,
      student: null
    }
  }

  authenticate(provider) {
    console.log(`can I log in with ${provider}`);
    base.authWithOAuthPopup(provider, this.authHandler);
  }

  authHandler(err, authData) {
    console.log(authData);
    if (err) {
      console.log(err);
      return;
    }


  // Return Student Information
  const studentRef = base.database().ref(this.props.studentId);

  // Query FB Once for Student Data
  studentRef.once('value', (snapshot) => {
    const data = snapshot.val() || {};

    // Claim as Student if there is no Student
    if (!data.student) {
      studentRef.set({
        student: authData.user.uid
      });
    }
    this.setState({
      uid:authData.user.uid,
      student: data.student || authData.user.uid
    })
  });
}

  renderLogin() {
    return(
      <nav>
        <p>Sign in to mangage your Student Account</p>
        <button className='github' onClick={() =>
        this.authenticate('github')}>Log in with GitHub</button>
      </nav>
    )
  }

  render() {
    const logout = <button>Log Out!</button>;
    // Check if they are not logged in
    if(!this.state.uid) {
      return <div>{this.renderLogin()}</div>
    }

    // Check if they are the Student of Current Page
    if (this.state.uid !== this.state.student) {
      return (
        <div>
          <p>Sorry you aren't the studnet of this page.</p>
          {logout}
        </div>
      )
    }

    //console.log(this.state.user);

    return (
      <div>
        <p>Student Log In</p>
        {/* {this.loginOrLogoutButton()} */}
        {/* <p>{this.props.user.name}</p> */}
        Hello
        {logout}
      </div>
    )
  }
}

  // componentDidMount() {
  //   // base.auth().onAuthStateChanged(user => {
  //   //   if (user) {
  //   //     console.log('User is signed in.', user);
  //   //     this.setState({
  //   //       user: user
  //   //     })
  //   //    }
  //   // });
  // }



  // logout() {
  //   // console.log('Log Out');
  //   // base.unauth()
  //   // this.setState({
  //   //   user: {}
  //   // })
  // }


//   loginOrLogoutButton() {
//     console.log(this.props.user.uid)
//     if (this.props.user.uid) {
//       return <button onClick={this.props.logout.bind(this)}>Logout</button>
//     } else {
//       return <button onClick={this.props.githublogin.bind(this)}>Login</button>
//     }
//   }
// }


export default StudentLogIn;
