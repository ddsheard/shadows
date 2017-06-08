import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import base from './rebase';
import firebase from 'firebase';
// import axios from 'axios';

class StudentProfile extends Component {
  constructor() {
    super()
    this.updateMessage = this.updateMessage.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
    this.state = {
      user: {},
      data: {},
      message:'',
      messages: []
    }
  }

  // updateMessage(event) {
  //   console.log'updateMessage:');
  // }

  componentDidMount() {
  //   let uid = this.props.user.uid
  //   base.fetch(`user/${uid}`, {
  //     context: this,
  //     asArray: false,
  //     then(data) {
  //       console.log(data);
  //       this.setState({user: data})
  //     }
  //   });

  // console.log('componentDidMount')
  firebase.database().ref('messages/').on('value', (snapshot) => {
    const currentMessages = snapshot.val()

    if(currentMessages != null) {
      this.setState({
        messages: currentMessages
      })
    }
  })
  }

  updateMessage(event) {
    console.log('updateMessage' + event.target.value)
    this.setState({
      message: event.target.value
    })
  }

  submitMessage(event) {
    console.log('submitMessage' + this.state.message)
    const nextMessage = {
      id: this.state.messages.length,
      text: this.state.message
    }
    firebase.database().ref('messages/' + nextMessage.id).set(nextMessage)
    // var list = Object.assign([], this.state.messages)
    // list.push(nextMessage)
    // this.setState({
    //   messages; list
    // })
  }

  render() {
    const currentMessage = this.state.messages.map((message, i) => {
      return (
        <li key={message.id}>{message.text}</li>
      )
    })
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
          <div className='col m12 s12'>
            <div className='card'>
              <div className='container'>
                <ol>
                  {currentMessage}
                </ol>
                <hr />

                <span className='card-title'>Would you share with others??</span>
                <input onChange={this.updateMessage} type='text' placeholder='Message' />
                <br />
                <button onClick={this.submitMessage} className='waves-effect waves-light btn'>Submit Message</button>
              </div>
              <br />
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
                <p>{this.props.login}</p>
                <p>This is a test: {this.props.user.availability}</p>
                <p>This is a test: {this.props.user.objectives}</p>
                <p>This is a test: {this.props.user.expertise}</p>
                <p>This is a test: {this.props.user.goals}</p>
                <p>This is a test: {this.props.user.tech}</p>
                {console.log(this.props)}
              </div>

              <div className='card-action'>
                {/* <Link to='/linkToDeveloper'>Link to Developer</Link> */}
              </div>
            </div>
          </div>

          <div className='col m5 s12'>
            <div className='card'>
              <div className='card-image'>
                {/* <span className='card-title'>Link to Developers</span> */}
              </div>

              <div className='card-content'>
                <ul className='collection'>
                  <li className='collection-item avatar'>
                    <span className='card-title'>Link to Developers</span>
                    <img src={this.props.user.avatar_url} alt='GitHub Image' className='circle gituser'/>
                    <span className='title'>
                      <strong>{this.props.user.name}</strong>
                    </span>
                    <p className='userInfo'>Developer Availability: {this.props.user.availability}</p>
                    <p className='userInfo'>Tech Stack: {this.props.user.tech}</p>
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
