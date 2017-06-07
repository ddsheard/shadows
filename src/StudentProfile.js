import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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

  componentDidMount() {
    let uid = this.props.user.uid
    base.fetch(`user/${uid}`, {
      context: this,
      asArray: false,
      then(data) {
        console.log(data);
        this.setState({user: data})
      }
    });
  }

  render() {
    return (
      <div className='container'>
        <br/><br/><br/>
        <div className='notification'>
          <img className="top-circle" src={this.props.user.avatar_url}/>
          <p className='noTop'>Hello {this.props.user.name},
          </p>
        </div>

        <div className='row'>
          <div className='col m12 s12'>
            <div className='card'>
              <span className='card-title'>Share with others??</span>
              <input placeholder='share with developer' type='text'/>
              <button className='waves-effect waves-light btn'>Create a Post</button>
            </div>
          </div>
        </div>
        {/* <div className='card-image'>
              <img src='images/lemuel-butler.jpg' /> */}
        {/* <span className='card-title'>{this.props.user.login} Information</span>
              </div> */}

        {/* <div className='card-content'>
                github information about each student will go here
              </div>
              <div className='card-action'></div>
              <a href='#'>Not sure what we need</a>
            </div> */}

        <div className='row'>
          <div className='col m7 s12'>
            <div className='card'>
              <div className='card-image'>
                <img src='images/lemuel-butler.jpg'/>
                <span className='card-title'>Card Title</span>
              </div>

              <div className="card-content">
                <p>This is a test: {this.state.user.availability}</p>
                <p>This is a test: {this.state.user.objectives}</p>
                <p>This is a test: {this.state.user.expertise}</p>
                <p>This is a test: {this.state.user.goals}</p>
                <p>This is a test: {this.state.user.tech}</p>
                {console.log(this.state)}
              </div>

              <div className='card-action'>
                {/* <Link to='/linkToDeveloper'>Link to Developer</Link> */}
              </div>
            </div>
          </div>

          <div className='col m5 s12'>
            <div className='card'>
              <div className='card-image'>
                <span className='card-title'>Link to Developers</span>
              </div>

              <div className='card-content'>
                <ul className='collection'>
                  <li className='collection-item avatar'>
                    <span className='card-title'>Link to Developers</span>
                    <img src={this.props.user.avatar_url} alt='GitHub Image' className='circle gituser'/>
                    <span className='title'>
                      <strong>{this.props.user.name}</strong>
                    </span>
                    <p className='userInfo'>Developer Availability: {this.state.user.availability}</p>
                    <p className='userInfo'>Tech Stack: {this.state.user.tech}</p>
                  </li>
                </ul>
              </div>
              <div className='card-action'>
                <Link to='/linkToDeveloper'>Link to Developer</Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StudentProfile;
