import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import base from './rebase';
import firebase from 'firebase';
import ShadowList from './ShadowList';
// import axios from 'axios';

class DeveloperProfile extends Component {
  constructor() {
    super();
    this.updateMessage = this.updateMessage.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
    this.state = {
      user: {},
      data: {},
      message: '',
      messages: []
    }
  }

//at somepoint I will need to .push new students to firebase at "loggedInAs" on the App.js component.
// what the statement will look like:
// students.push(student)
//if (students.push())

componentDidMount() {
  this.props.receiveUserInformation()
  base.fetch(`students`, {
  context: this,
  asArray: false}).then(response => {
    console.log('firebase response', response);
  });

  firebase.database().ref('messages/').on('value',(snapshot) => {

    const currentMessages = snapshot.val()

    if(currentMessages != null){
      this.setState({
        messages: currentMessages
      })
    }
  })
}

updateMessage(event) {
  console.log('updateMessage:' + event.target.value)
  this.setState({
    message: event.target.value
  })
}

submitMessage(event){
  console.log('submitMessage:' + this.state.message)
  const nextMessage = {
    id: this.state.messages.length,
    text: this.state.message,
    username: this.props.user.name,
    pic: this.props.user.avatar_url,
    key: this.props.user.uid + this.props.user.uid,
    secKey: this.props.user.uid + this.props.user.uid
  }
console.log(nextMessage.key);
console.log(nextMessage.secKey);
  // this.message.value = ''
  // this.message.placeholder = ''
  // event.preventDefault()

  firebase.database().ref('messages/' +nextMessage.id).set(nextMessage)
//   var list = Object.assign([], this.state.messages)
//   list.push(nextMessage)
//   this.setState({
//     messages: list
//   })
}



  render() {
    const specialKey = this.props.user.uid + this.props.user.uid

    const currentMessage = this.state.messages.map((message, i) => {
      if(message.key === specialKey || message.secKey === specialKey) {
        return (
          <li key={message.id}>
            <img width='32' className='circle' alt='avatar' src={message.pic} /> &nbsp;
            <strong className="strongChat">{message.text}</strong>
            <br/><em className="emChat">{message.username}</em>
          </li>
        )
      } else {
        return null
      }
    })
    console.log(this.props.user, this.state.user)
    return (
      <div className="container">
        <br/><br/><br/>


        <div className="row">

          <div className="col m7 s12">
            <div className="card">
              <div className="card-image">
                <img src={this.props.user.avatar_url} width='200px' />
                <span className='card-title'>{this.props.user.name}</span>
              </div>

              <div className="card-content">
                <h4>Github User Information</h4>
                <p>Login: {this.props.user.login}</p>
                <p>Profile: {this.props.user.html_url}</p>
                <p>Location: {this.props.user.location}</p>
                {/* <p>Looking for a job: {this.props.user.hirable ? 'No' : 'Yes'}</p> */}
                {/* <p>Email: {this.props.user.email}</p> */}
                <p>Public Repos: {this.props.user.public_repos}</p>
                <hr/>
                <p><b>Availability</b>: {this.props.user.availability}</p>
                <p><b>Company</b>: {this.props.user.company}</p>
                <p><b>Url</b>: {this.props.user.url}</p>
                <p><b>Address</b>: {this.props.user.address}</p>
                <p><b>Objectives</b>: {this.props.user.objectives}</p>
                <p><b>Interests</b>: {this.props.user.interests}</p>
                <p><b>Expertist</b>: {this.props.user.expertist}</p>
                <p><b>Tech</b>: {this.props.user.tech}</p>
                {console.log(this.state)}
              </div>

              {/* <div className="card-action">
                <a href="#">This is a link</a>
              </div> */}
            </div>
          </div>

          <div className='row'>
            <div className='col m5 s12'>
              <div className='card'>
                  <ShadowList user={this.props.user}  myType='developer' type='student'/>
              </div>
            </div>
          </div>



              {/* <div className="card-action">
                <Link to="/linkToStudents">Link to Students</Link>
                <button onClick={this.submitMessage.bind(this)} className="waves-effect waves-light btn">Chat</button>
              </div> */}

      </div>

      </div>
    )
  }

}


export default DeveloperProfile;
