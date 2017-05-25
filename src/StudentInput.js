import React, { Component } from 'react';
//{ Component } allows you to use the components within the app
import axios from 'axios';
import base from './rebase';

  class StudentInput extends Component {
    constructor() {
      super()
      this.state = {
        student: {}
      }
    }
  //
  // componentDidMount () {
  //   axios.get('https://api.github.com/users/ddsheard').then(response => {
  //     console.log(response.data)
  //     this.setState({owner: response.data});
  //   })
  // }

logOut () {
  console.log('Log Out');
  base.unauth()
}
    render() {
      return (
        <div>
          <h1>Studen Page</h1>
          <button onClick={this.logOut}>Log Out</button>
        </div>
      )
    }
  }
export default StudentInput;
