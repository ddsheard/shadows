import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DeveloperLogIn from './DeveloperLogIn';
import StudentLogIn from './StudentLogIn';
import base  from './rebase';


class Home extends Component {

  render() {
    return (
      <div className="container center-align">
        <br/><br/><br/>
      <div className="row center-align">
          <div className="col m12">
            <div className="card">
              <div className="card-image">
                {/* <img src="images/sample-1.jpg"/> */}
                {/* <span className="card-title">Shadows Log-In</span> */}
              </div>
              <div className="card-content">
              <h1>CODEfwd with Shadows</h1> <br />
              <em>...A day in the life</em>
              <blockquote>“Tell me and I forget, teach me and I may remember, involve me and I learn.” <br />
― Benjamin Franklin</blockquote>
                <p className="ParaAlign">
                  Shadows is a networking platform that allows students learning code to meet seasoned developers. Our goal is to build relationships by allowing students to get a glimpse into a day in the life of a working developers.
                </p>
                <p className="ParaAlign">
                Shadows incorporates Github authentication to create and access your profile. If you are a developer click the <b>Developer</b> button below and if you are a student click the <b>Student</b> button. You will also have the opportunity to communicate via chat through this app.
                </p>
              </div>
              <div className="card-action">

                  <button className='waves-effect waves-light btn' onClick={this.props.clickedOnDev.bind(this)} type='submit'>Developer</button>


                  <button className='waves-effect waves-light btn' onClick={this.props.clickedOnStudent.bind(this)} type='submit'>Student</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
