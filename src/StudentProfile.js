import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import base from './rebase';
import firebase from 'firebase';
import ShadowList from './ShadowList';

class StudentProfile extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      data: {},
      message:'',
      messages: []
    }
  }

  componentDidMount() {
    this.props.receiveUserInformation()
    };

  render() {
    console.log(this.props.user, this.state.user)

    return (
      <div className='container'>
        <br/><br/><br/>
        <div className='notification'>
          <img className="top-circle" src={this.props.user.avatar_url}/>
          <p className='noTop'>Hello {this.props.user.name},
          </p>
        </div>

        <div className='row'>
          <div className='col m7 s12'>
            <div className='card'>
              <div className='card-image'>
                <img src={this.props.user.avatar_url} width='200px' />
                <span className='card-title'>{this.props.user.name}</span>
              </div>

              <div className="card-content">
                <h4>Github User Information</h4>
                <p>Login: {this.props.user.login}</p>
                <p>Profile: <a href={this.props.user.html_url} target="_blank">{this.props.user.html_url}</a></p>
                <p>Location: {this.props.user.location}</p>
                <p>Looking for a job: {this.props.user.hirable ? 'No' : 'Yes'}</p>
                <p>Email: <a href={`mailto:${this.props.user.email}`}>{this.props.user.email}</a></p>
                <p>Public Repos: {this.props.user.public_repos}</p>
                {/* <p>: {this.props.user.}</p> */}
                <hr />
                <p><b>Availability:</b> {this.props.user.availability}</p>
                <p><b>Objectives:</b> {this.props.user.objectives}</p>
                <p><b>Expertise:</b> {this.props.user.expertise}</p>
                <p><b>Goals:</b> {this.props.user.goals}</p>
                <p><b>Tech:</b> {this.props.user.tech}</p>
                {console.log(this.props)}
              </div>

              <div className='card-action'>
                {/* <Link to='/linkToDeveloper'>Link to Developer</Link> */}
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col m5 s12'>
              <div className='card'>
                  <ShadowList user={this.props.user}  myType='student' type='developer'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      //doing a push pull on 7/5
    )
  }
}

export default StudentProfile;
