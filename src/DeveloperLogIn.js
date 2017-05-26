import React, { Component } from 'react';
import base from './rebase';

// import axios from 'axios';

class DeveloperLogIn extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
      base.auth().onAuthStateChanged(user => {
        if (user) {
          console.log('User is signed in.', user);
          this.setState({
            user: user
          })
         }
      });
    }

  githubLogin (){
    console.log('github')
      var authHandler = (error, data) => {
        console.log('user', data.user)
        this.setState({
          user: data.user
        })
        this.props.history.push(`/developerinput/`);
      }
      //basic
      base.authWithOAuthPopup('github', authHandler);
    }

    logout () {
      console.log('logout');
    base.unauth()
    this.setState({
      user:{}
    })
  }

  loginOrLogoutButton () {
    if (this.state.user.uid) {
      return <button onClick={this.logout.bind(this)}>Logout</button>
    } else {
      return <button onClick={this.githubLogin.bind(this)}>Login</button>
    }
  }

  render() {
    // console.log(this.state.user);
    return (
      <div>
        <p>Dev login</p>
        {/* <button onClick={this.githubLogin.bind(this)}>Sign in Github</button> */}
        Hello
        {this.loginOrLogoutButton()}
        <h1>Blah</h1>
      </div>
    )
  }
}


export default DeveloperLogIn;
