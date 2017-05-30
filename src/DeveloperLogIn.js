import React, { Component } from 'react';
import base from './rebase';

// import axios from 'axios';

class DeveloperLogIn extends Component {
  constructor() {
    super();
    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.state = {
      uid: null,
      developer: null
    }
  }

  authenticate(provider) {
    console.log(`trying to log in with ${provider}`)
    base.authWithOAuthPopup(provider, this.authHandler);
  }

  authHandler(err, authData) {
    console.log(authData)
    if (err) {
      console.error(err);
      return;
    }
    //return the developer Information
    const developerRef = base.database().ref(this.props.developerId);

    //query firebase once for developer data
    developerRef.once('value', (snapshot) => {
      const data = snapshot.val() || {};

      //claim as dev if there is no developer
      if(!data.developer) {
        developerRef.set({
          developer: authData.user.uid
        });
      }
      this.setState({
        uid:authData.user.uid,
        developer: data.developer || authData.user.uid
      })

    });

  }


renderLogin() {
  return (
    <nav>
      <p>Sign in to mange your Developer Account</p>
      <button className="github" onClick={() => this.authenticate('github')}>Log In with Github</button>

    </nav>
  )
}



  // componentDidMount() {
  //     base.auth().onAuthStateChanged(user => {
  //       if (user) {
  //         console.log('User is signed in.', user);
  //         this.setState({
  //           user: user
  //         })
  //        }
  //     });
  //   }
  //
  // githubLogin (){
  //   console.log('github')
  //     var authHandler = (error, data) => {
  //       console.log('user', data.user)
  //       this.setState({
  //         user: data.user
  //       })
  //       this.props.history.push(`/developerinput/`);
  //     }
  //     //basic
  //     base.authWithOAuthPopup('github', authHandler);
  //   }
  //
  //   logout () {
  //     console.log('logout');
  //   base.unauth()
  //   this.setState({
  //     user:{}
  //   })
  // }
  //
  // loginOrLogoutButton () {
  //   if (this.state.user.uid) {
  //     return <button onClick={this.logout.bind(this)}>Logout</button>
  //   } else {
  //     return <button onClick={this.githubLogin.bind(this)}>Login</button>
  //   }
  // }

  render() {
    const logout = <button>Log Out!</button>;
    //check if they are not logged in
    if(!this.state.uid) {
      return <div>{this.renderLogin()}</div>
    }

    //check if they are the developer of current Page
    if(this.state.uid !== this.state.developer) {
      return (
        <div>
          <p>Sorry you aren't the developer of this page!</p>
          {logout}
        </div>
      )
    }
    // console.log(this.state.user);
    return (
      <div>
        <p>Dev login</p>
        {/* <button onClick={this.githubLogin.bind(this)}>Sign in Github</button> */}
        Hello
        {/* {this.loginOrLogoutButton()} */}
        {logout}
        <h1>Blah THis is the Dev LogIn Page</h1>
      </div>
    )
  }
}


export default DeveloperLogIn;
