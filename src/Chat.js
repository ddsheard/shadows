import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import base from './rebase';

  //PASSING OBJECT WITH AUTHOR, TEXT, ETC
  const Message = ({author, text, id, channel_id}) => (
    <div className="Message">
      <div className="Message-Author">
        {author}
      </div>
      <div className="Message-Text">
        {text}
      </div>
    </div>
  )

  const List = ({messages}) => (
    <div className="MessagePane-List">
      {messages.map(({author, text}, index) => <Message author={author} text={text} key={index} /> )}
    </div>
  )

class Chat extends Component {
  constructor() {
    super();
    this.message = this.message.bind(this);
    this.state = {
      user: {},
      users: [],
      messages: [],
      name: '',
      message: '',
      otherUser: '',
      index: ''
    }
  }

  //syncState FOR CHAT
  componentDidMount(){
    let user = this.props.user
    let type = this.props.type
    let uid = user.uid
    let otherUser = this.state.otherUser
    console.log(user.uid);
    let index = this.props.index
    this.setState({ index: index })

    let users = this.props.users
    this.setState({ users: users })

    // this.setState({ otherUser: users[index].uid })

    // let channel_id = this.state.channel_id
    console.log(this.props.otherUser, 'june');
    base.syncState(`Chat/${this.props.studentUid}+${this.props.developerUid}`, {
      context: this,
      state: 'messages',
      asArray: true
    });
  }

  // componentWillReceiveProps(props){
  //   let users = this.state.users
  //   let index = this.state.index
  //
  //   this.setState({ otherUser: users[index].uid})
  // }
  ///////////

  updateOtherMessages(){
    let uid = this.props.uid
    let user = this.props.user
    let type = this.props.type
    base.update(`user/${type}/${uid}`, {
      context: this,
      state: 'messages',
      asArray: false
    });
  }

  // this.message = this.message.bind(this);

  message(e) {
    let message = this.state.message

    this.setState({
      message: e.target.value
    });
  }

  onSubmit() {
    // this.startChat()
    const { message } = this.state;
    let name = this.props.user.name
    this.onSend(name, message)
    this.setState( message:'')
  }

  onSend(author, text) {
    let user = this.state.user
    const new_message = {
      // id: this.state.messages[this.state.messages.length - 1].id +1,
      author,
      text,
      channel_id: 1
    };

   const messages = [...this.state.messages, new_message];
    this.setState({ messages});
    this.setState({ message: ''})
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <List messages={this.state.messages} />
        <div className="MessagePane-Form">
          <div className="MessagePane-Form-Container">
            <p>
              {this.props.user.name}
            </p>
            <p><textarea
              className="message"
              type="text"
              placeholder="Message"
              value={this.state.message}
              onChange={this.message.bind(this)}
            />
            </p>
            <button className="Submit" onClick={this.onSubmit.bind(this)}>Submit</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Chat;
