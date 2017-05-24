import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DeveloperLogIn from './DeveloperLogIn';
import StudentLogIn from './StudentLogIn';


class Home extends Component {
  render() {
    return (
      <div className="row">
              <div className="col s12 m7">
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
                    <Link to='DeveloperLogIn'>
                      <button className='waves-effect waves-light btn' type='submit'>Developer</button>
                    </Link>
                    <Link to='StudentLogIn'>
                      <button className='waves-effect waves-light btn' type='submit'>Student</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
    )
  }
}

export default Home;
