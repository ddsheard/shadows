import React, { Component } from 'react';
//{ Component } allows you to use the components within the app
import AddStuForm from './AddStuForm';
import axios from 'axios';
import base from './rebase';

  class StudentInput extends Component {

    constructor(props) {
      super(props)
      this.state = {}
    }

  // componentDidMount () {
  //   axios.get('https://api.github.com/users/ddsheard').then(response => {
  //     console.log(response.data)
  //     this.setState({owner: response.data});
  //   })
  // }

  // logOut () {
  //   console.log('Log Out');
  //   base.unauth()
  // }
    render() {
      // if (!this.state.githubData) return <p>Loading...</p>
      // console.log(this.state.githubData);
      return (
        <div>
          <h1>Student Page</h1>
          <div className='githubInfo'></div>
          {/* <button onClick={this.logOut}>Log Out</button> */}
          <div className='shadowStuInfo'>
            <AddStuForm addStudentInput={this.props.addStudentInput} />
          </div>
        </div>
      )
    }
  }
export default StudentInput;
