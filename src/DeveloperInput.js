import React, { Component } from 'react';
import AddDevForm from './AddDevForm';
import axios from 'axios';
import base from './rebase';

// const urlForUsername = username => `https://api.github.com/users/${username}`
// const urlForAuthUser = user => `https://api.github.com/${user}`

class DeveloperInput extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }



  // componentDidMount () {
  //   console.log(this.props);
  //   console.log(this.props.username);
  //   axios.get(urlForUsername(this.props.username))
  //         .then(response => response.data)
  //         .then(response => {
  //           this.setState({githubData: response})
  //         })
  //
  // }
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
    // if (!this.state.githubData) return <p>Loading...</p>
    // console.log(this.state.githubData);
    return (
      <div className='container center-align'>
        <h1>Developer Information</h1>

        <div className="githubInfo">
          <div className="row">
            <div className="col m6 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  {/* <span class="card-title">Card Title</span> */}
                  <img className="githubPic" src={this.props.user.avatar_url} />
                  <p><span className="login">{this.props.user.login}</span></p>
                  <ul className='emailLocation'>
                    <li>{this.props.user.email}</li>
                    <li>{this.props.user.location}</li>
                  </ul>


                  <p>Hi {this.props.user.name}, thank you for signing up to be a Shadow. Please take a moment to fillout our Developer Form. This helps us to get to know you a little better.</p>
                </div>

              </div>
            </div>
          </div>


        </div>
          {/* <h1>{this.props.user.name}</h1> */}

        <div className="shadowDevInfo">

          <AddDevForm addDeveloperInput={this.props.addDeveloperInput} user={this.props.user} type={this.props.type}/>

        </div>
      </div>
    )
  }
}
export default DeveloperInput;
