import React, { Component } from 'react';
import axios from 'axios';

class DeveloperProfile extends Component {

  componentDidMount () {
    axios.get('https://api.github.com/users/ddsheard').then(response => {
      console.log(response.data)
      this.setState({owner: response.data});
    })
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
