import React, { Component } from 'react';
import axios from 'axios';
import base from './rebase';


class DeveloperInput extends Component {

  constructor() {
    super()
    this.state = {
      developer: {}
    }
  }

  // componentDidMount () {
  //   axios.get('https://api.github.com/user/').then(response =>
  //     response.data)
  //     .then(obj => console.log(obj.data))
  //
  // }


  // componentDidMount(){
  //    axios.get(`https://api.github.com/repositories/${this.props.match.params.id}`)
  //    .then(response => {this.setState({owner: response.data.owner})})
  //  }

  logOut () {
    console.log('logOut')
    base.unauth()
  }

  render() {
    return (
      <div>
        <h1>Developer Page</h1>
        <h3>{name}</h3>
        <button onClick={this.logOut}> Log Out </button>
      </div>
    )
  }
}
export default DeveloperInput;
