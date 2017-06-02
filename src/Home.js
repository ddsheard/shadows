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
                <p>
                  Thank you for choosing Shadows.
                  Please have your github password handy. Then choose the shadow that interests you below:
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
