import React, { Component } from 'react';
import AddDevForm from './AddDevForm';
import axios from 'axios';
import base from './rebase';

const urlForUsername = username => `https://api.github.com/users/${username}`
// const urlForAuthUser = user => `https://api.github.com/${user}`

class DeveloperInput extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }



  componentDidMount () {
    axios.get(urlForUsername(this.props.username))
          .then(response => response.data)
          .then(response => {
            this.setState({githubData: response})
          })

  }
  // componentDidMount () {
  //   axios.get(urlForAuthUser(this.props.user))
  //         .then(response => response.data)
  //         .then(response => {
  //           this.setState({githubData: response})
  //         })
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
    if (!this.state.githubData) return <p>Loading...</p>
    return (
      <div>
        <h1>Developer Page</h1>

        <div className="githubInfo"></div>
          <h1>{this.state.githubData.name}</h1>
        <div className="shadowDevInfo">

          <AddDevForm addDeveloperInput={this.props.addDeveloperInput}/>

        </div>
      </div>
    )
  }
}
export default DeveloperInput;
