import React, { Component } from 'react';
//{ Component } allows you to use the components within the app
import { Link } from 'react-router-dom';
import AddStuForm from './AddStuForm';
import axios from 'axios';
import base from './rebase';

class StudentInput extends Component{

  // constructor() {
  //   super()
  //   this.state = {
  //     users: []
  //   }
  // }

//   componentDidMount() {
//     base.fetch(`users/${this.state.user.uid}`, {
//       context: this,
//       asArray: false,
//       then(data){
//         this.setState({ user: [data] })
//         console.log(this.state.user);
//       }
//     })
//   }
//
//   showStudent() {
//     let users = this.state.users
//     return users.map(users, index) => {
//       return(
//         <div className='' key={index} >
//         <div className='avatar'>
//           <img className='avatarProfile' src={users.avatar_url} alt='Student Avatar'/>
//         </div>
//
//         </div>
//       )
//     }
//   }
//
//   button(e) {
//     e.preventDefault()
//     let availability = this.availability.value
//     let aboutYou = this.aboutYou.value
//     let techStack = this.techStack.value
//     let experience = this.experience.value
//     let objectives = this.objectives.value
//     let goals = this.goals.value
//
//     console.log(availability);
//   }
//
//   getData() {
//     base.fetch(`user/${user}`, {
//       context: this,
//       asArray: true,
//       then(data) {
//         console.log(data);
//         this.setState({ user: data })
//         console.log('what is my state', this.state.user);
//       }
//     }).then(console.log('it works')
//   }
//   studentInfo() {
//     let user = this.state.users
//     console.log(user);
//     return this.state.user.map (user, index) => {
//       return(
//         <div key={index}>
//           <p>user.availability</p>
//           <p>user.aboutYou</p>
//           <p>user.techStack</p>
//           <p>user.experience</p>
//           <p>user.objectives</p>
//           <p>user.goals</p>
//         </div>
//       )
//     }
//   }
//
  render() {
    return(
      <div>
        <h1>student input again</h1>
      </div>
//       <div className='everyStudent'></div>
//       { this.showStudent() }
//       { this.studentInfo() }
//
//       <form>
//         <p>Availability</p>
//         <input  type='text' ref={(input) => {this.availability = input}} />
//         <p>Tell us about yourself</p>
//         <input type='text' ref={(input) => {this.aboutYou = input}} />
//         <p>What tech stacks</p>
//         {/* <input type='text' ref{(input)} => {this.}/> */}
//         <p>What is your coding experience?</p>
//         <input type='text' ref={(input) => {this.experience = input}} />
//         <p></p>
//         <p></p>
//
//       </form>
    )
  }
//
}

export default StudentInput;

//  CONTENT FROM BEFORE IF THIS DOESN'T WORK
// class StudentInput extends Component {
//
//   constructor(props) {
//     super(props)
//     this.state = {}
//   }
//
// // componentDidMount () {
// //   axios.get('https://api.github.com/users/ddsheard').then(response => {
// //     console.log(response.data)
// //     this.setState({owner: response.data});
// //   })
// // }
//
// // THIS IS HERE TO PUSH ONLY
//
// // logOut () {
// //   console.log('Log Out');
// //   base.unauth()
// // }
//   render() {
//     // if (!this.state.githubData) return <p>Loading...</p>
//     // console.log(this.state.githubData);
//     return (
//       <div>
//         <h1>Student Page</h1>
//         <div className='githubInfo'></div>
//         {/* <button onClick={this.logOut}>Log Out</button> */}
//         <div className='shadowStuInfo'>
//           <AddStuForm addStudentInput={this.props.addStudentInput} />
//         </div>
//       </div>
//     )
//   }
// }
