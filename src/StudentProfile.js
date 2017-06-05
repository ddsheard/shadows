import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import base from './rebase';
// import axios from 'axios';

class StudentProfile extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
      data: {}
    }
  }

  render () {
    return (
      <div className='container'>
        <br/><br/><br/>
        <div className='notification'>
          <img className='circle' src={this.props.user.avatar_url} />
          <p className='noTop'>Hello {this.props.user.name}, </p>
        </div>
        <div className='row'>
          <div className='col m7 s12'>
            <div className='card'>
              <div className='card-image'>
              <img src='images/lemuel-butler.jpg' />
              <span className='card-title'>{this.props.user.login} Information</span>
              </div>
              
              <div className='card-content'>
                github information about each student will go here
              </div>
              <div className='card-action'></div>
              <a href='#'>Not sure what we need</a>
            </div>
          </div>
        </div>
        <p>Student Profile</p>


        <div className='col m5 s12'>
          <div className='card'>
            <div className='card-image'>
              <img src='images/lemuel-butler.jpg' />
              <span className='card-title'>Card Title</span>
            </div>

            <div className='card-content'>
              <p>hola chica</p>
            </div>

            <div className='card-action'>
              {/* <Link to='/linkToDeveloper'>Link to Developer</Link> */}
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default StudentProfile;
