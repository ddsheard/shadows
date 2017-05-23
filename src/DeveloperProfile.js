import React, { Component } from 'react';
import axios from 'axios';

class DeveloperProfile extends Component {

  componentDidMount() {
    axios.get(`https://api.github.com/repositories`).then(reponse => this.setState({}))
  }

  render() {
    return (
      <div>
        <h1>We are on the developers profile page.</h1>
      </div>
    )
  }

}


export default DeveloperProfile;
