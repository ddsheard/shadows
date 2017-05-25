import React, { Component } from 'react';
import axios from 'axios';

class StudentProfile extends Component {

  componentDidMount() {
    axios.get('http://api.github.com/users/ddsheard').then(response => {
      console.log(response.data)
      this.setState({owner: response.data});
    })
  }

  render () {
    return (
      <div>
        <p>Student Profile</p>
      </div>
    )
  }
}

export default StudentProfile;
