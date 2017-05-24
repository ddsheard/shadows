import React, { Component } from 'react';
import axios from 'axios';


class Developer extends Component {

  constructor() {
    super()
    this.state = {
      owner: {}
    }
  }

  componentDidMount () {
    axios.get('https://api.github.com/users/ddsheard').then(response => {
      console.log(response.data)
      this.setState({owner: response.data});
    })
  }

  render() {
    return (
      <div>
        <h1>Developer Page</h1>
      </div>
    )
  }
}
export default Developer;
