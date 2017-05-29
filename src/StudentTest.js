import React, { Component } from react;

class StudentTest extends component {

  constructor() {
    super();
    this.state = {
      user: user
    }
  }

  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });


  var provrider = new firebase.auth.GithubAuthProvider();

  firebase.auth().signInWithRedirect(provider);

  render() {
    return(
      <div>
        <h1>Student Test Page</h1>

      </div>
    )
  }
}
