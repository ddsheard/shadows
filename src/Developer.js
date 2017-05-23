import React, { Component } from 'react';
import axios from 'axios';

class Developer extends Component {

  componentDidMount() {
    axios.get(`https://api.github.com/repositories`).then(reponse => this.setState({}))
  }

  render() {
    return (
      <div>
        <h1>Developer's Page</h1>
      </div>
    )
  }

}


export default Developer;
