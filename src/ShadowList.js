import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import base from './rebase';
import Chat from './Chat';

class ShadowList extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      type: '',
      isPressed: false,
      index: '',
      otherUser: '',
      studentUid: '',
      developerUid: ''
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

  startChat(index) {
    console.log(this.state.users[index].uid);
    let isPressed = this.state.isPressed;
    if (isPressed === false) {
      this.setState({
        isPressed: true
      })
    } else if (isPressed === true) {
      this.setState({
        isPressed: false
      })
    }
      console.log(isPressed);
      this.setState({ otherUser : this.state.users[index].uid })

      let someType = this.props.myType
      console.log(this.props.user);
      if (someType === 'student') {
        this.setState({ studentUid: this.props.user.uid, developerUid: this.state.users[index].uid })
      } else {
        this.setState({ studentUid: this.state.users[index].uid, developerUid: this.props.user.uid })
      }
    }

  showUser() {
    let users = this.state.users
    // console.log(this.state.users);
    console.log(users);
    return users.map((users, index) => {
      return (
        <div key={index}>
          <div className='userBorder'>
            <div>
            {/* <p>hi</p> */}
            <img src={users.avatar} width='50px' />
            {users.avatar_url}
            <br/> <b>{users.name}</b>
            <br/>
            Tech Stack: {users.tech} <br/>
            Availability: {users.availability}
          </div>
          <div>
            <button onClick={this.startChat.bind(this, index )}>Chat</button>
            <br/>
            {/* <button>Developer Details</button> */}
          </div>
          </div>
        </div>
      )
    })
  }

  render() {
    console.log(this.props.type);

    let isPressed = this.state.isPressed;

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
              <span className='card-title'>Chat with {this.props.type}'s</span>
              {this.showUser()}
              {/* <img src={this.props.user.avatar_url} alt='Github User Image' className='circle gituser'/>
              <span className='title'>
                <strong>{this.props.user.name}</strong>
              </span>
              <p className='userInfo'>Availability: {this.props.user.availability}</p>
              <p className='userInfo'>Tech Stack: {this.props.user.tech}</p> */}
            </li>
          </ul>
          {/* <h1>not today</h1> */}

        </div>

        {isPressed ? <Chat user={this.props.user} users={this.state.users} type={this.props.type} index={this.state.index} otherUser={this.state.otherUser} studentUid={this.state.studentUid} developerUid={this.state.developerUid}/> : null}


        {/* <div className='card-action'>
          <Link to='/linkToDeveloper'>Link to Developer</Link>

        </div> */}
      </div>
    )
  }
}

export default ShadowList;
