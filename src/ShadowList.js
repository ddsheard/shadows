import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import base from './rebase';

class ShadowList extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      type: ''
    }
  }

  componentDidMount() {
    base.fetch(`user/${this.props.type}/`, {
      context: this,
      asArray: true,
      then(data) {
        this.setState({users: data})
        // console.log(data)
      }
    });
  }

  showUser() {
    let users = this.state.users
    console.log(this.state.users);
    return users.map((users, index) => {
      return (
        <div className='userBorder'>
          {/* <p>hi</p> */}
          {users.login} <br />
          {users.name} <br />
          <b>Availability:</b> {users.availability}
          <br />
        </div>
      )
    })
  }

  render() {
    console.log(this.props.type);
    return (
      <div>
        <div className='row'>
          <div className='col m5 s12'>
            <div className='card'>
              <div className='card-image'></div>
            </div>
          </div>
        </div>

        <div className='card-content'>
          <ul className='collection'>
            <li className='collection-item avatar'>
              <span className='card-title'>`Link to Developer's`</span>
              {this.showUser()}
              {/* <img src={this.props.user.avatar_url} alt='Github User Image' className='circle gituser'/>
              <span className='title'>
                <strong>{this.props.user.name}</strong>
              </span>
              <p className='userInfo'>Availability: {this.props.user.availability}</p>
              <p className='userInfo'>Tech Stack: {this.props.user.tech}</p> */}
            </li>
          </ul>
          <h1>hello</h1>

        </div>

        <div className='card-action'>
          <Link to='/linkToDeveloper'>Link to Developer</Link>

        </div>
      </div>
    )
  }
}

export default ShadowList;
