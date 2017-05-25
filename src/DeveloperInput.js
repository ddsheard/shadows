import React, { Component } from 'react';
import AddDevForm from './AddDevForm';
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

  // logOut () {
  //   console.log('logOut')
  //   base.unauth()
  // }

  render() {
    return (
      <div>
        <h1>Developer Page</h1>

        <div className="githubInfo"></div>

        <div className="shadowDevInfo">

          <AddDevForm addDeveloperInput={this.props.addDeveloperInput}/>

        </div>
      </div>
    )
  }
}
export default DeveloperInput;
