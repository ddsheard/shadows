import React { Component } from 'react';
import axios fom 'axios';
import base from './rebase';

class ShadowList extends Component {

  constructor() {
    super();
    user: {}
  }
  retrieveFirebaseData() {
  let uid = this.state.user.uid
  let type = this.state.type
  console.log(uid);
  base.fetch(`user/${type}/${uid}`, {
    context: this,
    asArray: false}).then(response => {
      console.log('firebase response', response);
      this.setState({
        user: {...this.state.user, ...response}})
  })
  console.log('hello');
  }

  render(){

    return(
      <div className='row'>
        <div className='col m5 s12'>
          <div className='card'>
            <div className='card-image'>

            </div>
          </div>
        </div>
      </div>

      <div className='card-content'>
        <ul className='collection'>
          <li className='collection-item avatar'>
            <span className='card-title'>`Link to ${type}'s`</span>
            <img src={this.props.user.avatar_url} alt='Github User Image' className='circle gituser' />
            <span className='title'>
              <strong>{this.props.user.name}</strong>
            </span>
            <p className='userInfo'>Availability: {this.props.user.availability}</p>
            <p className='userInfo'>Tech Stack: {this.props.user.tech}</p>
          </li>
        </ul>
      </div>
      <div className='card-action'>
        <Link to='/linkToDeveloper'>Link to Developer</Link>

      </div>
    )
  }
}

export default ShadowList;
