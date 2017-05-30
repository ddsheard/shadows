import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class LinkToStudents extends Component {
  render() {
    return (
      <div className="container">
          <div className="row">
            <div className="col m4 s3">
              <div className="card center align">

                <div className="card-image img-circle">
                  <img src="images/woman.jpg" />
                </div>

                <div className="card-content">
                  <span className="card-title">Carol Biggs</span>
                  <h6>Student Availability</h6>
                  <p>9/34/2019</p>

                  <h6>Student Tech Stack</h6>
                  <p>JS</p>
                </div>

                <div className="card-action">
                  <a href="#">Connect with Student</a>
                </div>

              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default LinkToStudents;
