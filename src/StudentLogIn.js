import React, { Component } from 'react';
// import axios from 'axios';
import base from './rebase';

class StudentLogIn extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     user: {}
  //   }
  // }

  componentDidMount() {
    // base.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     console.log('User is signed in.', user);
    //     this.setState({
    //       user: user
    //     })
    //    }
    // });
  }



  logout() {
    // console.log('Log Out');
    // base.unauth()
    // this.setState({
    //   user: {}
    // })
  }


  loginOrLogoutButton() {
    console.log(this.props.user.uid)
    if (this.props.user.uid) {
      return <button onClick={this.props.logout.bind(this)}>Logout</button>
    } else {
      return <button onClick={this.props.githublogin.bind(this)}>Login</button>
    }
  }
  render() {
    return (
      <div>
        <p>Student Log In</p>
        {this.loginOrLogoutButton()}
        {/* <p>{this.props.user.name}</p> */}
      </div>
    )
  }
}

export default StudentLogIn;
