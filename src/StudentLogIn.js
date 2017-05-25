import React, { Component } from 'react';
// import axios from 'axios';
import base from './rebase';

class StudentLogIn extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    base.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('This user is logged it', user);
        this.setState({
          user: user
        })
      }
    });
  }

  githubLogin() {
    console.log('github');
    var authHandler = (error, data) => {
      console.log('user', data.user)
      this.setState({
        user: data.user
      })
      this.props.history.push(`/studentinput/`);
    }
    base.authWithOAuthPopup('github', authHandler);
  }

  logout() {
    console.log('Log Out');
    base.unauth()
    this.setState({
      user: {}
    })
  }


  loginOrLogoutButton() {
    if (this.state.user.uid) {
      return <button onClick={this.logout.bind(this)}>Logout</button>
    } else {
      return <button onClick={this.githubLogin.bind(this)}>Login</button>
    }
  }
  render() {
    return (
      <div>
        <p>Student Log In</p>
        {this.loginOrLogoutButton()}
        <p>{this.props.user.name}</p>
      </div>
    )
  }
}

export default StudentLogIn;
