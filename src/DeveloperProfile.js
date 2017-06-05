import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import base from './rebase';
// import axios from 'axios';

class DeveloperProfile extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      data: {}
    }
  }

  // componentDidMount () {
  //   axios.get('https://api.github.com/users/').then(response => {
  //     console.log(response.data)
  //     this.setState({owner: response.data});
  //   })
  // }





componentDidMount() {
  let uid = this.props.user.uid
  base.fetch(`user/${uid}`, {
    context: this,
    asArray: false,
    then(data){
      console.log(data);
      this.setState({user: data})
    }
  });
}


//   showDeveloperData() {
//     let user = this.props.user.uid
//     console.log(user);
// }


// allThatInfo(){
//   let user = this.state.user
//   console.log(user)
//   return this.state.user.map( (user, index) => {
//     return(
//       <div key={index}>
//         <p>hello {user.age}</p>
//         <p>{user.firstName}</p>
//         <p>{user.hobby}</p>
//         <p>{user.restaraunt}</p>
//         <p>{user.displayName}</p>
//         <p>{user.genre}</p>
//       </div>
//     )
//   } )
//  }


  render() {
    console.log(this.props.user, this.state.user)
    return (
      <div className="container">
        <br/><br/><br/>
        <div className="notification">
          <img className="top-circle" src={this.props.user.avatar_url} />
          <p className="noTop">Hi {this.props.user.name}, you have a New Shadow.
          This is a test: {this.state.user.availability}, {this.state.user.company}, {this.state.user.url}</p>
        </div>

        <div className="row">
          <div className="col m12 s12">
            <div className="card">
              <span className="card-title">Share with others</span>
                <input placeholder="Share with Students" type="text"/>
                <button className="waves-effect waves-light btn">Make a Post</button>
            </div>
          </div>
        </div>

          <div className="row">

            <div className="col m7 s12">
              <div className="card">
                <div className="card-image">
                  <img src="images/lemuel-butler.jpg"/>
                  <span className="card-title">Card Title</span>
                </div>

                <div className="card-content">
                  <p>This is a test: {this.state.user.availability}</p>
                  <p>This is a test: {this.state.user.company}</p>
                  <p>This is a test: {this.state.user.url}</p>
                  <p>This is a test: {this.state.user.address}</p>
                  <p>This is a test: {this.state.user.objectives}</p>
                  <p>This is a test: {this.state.user.interests}</p>
                  <p>This is a test: {this.state.user.expertist}</p>
                  <p>This is a test: {this.state.user.tech}</p>
                  {console.log(this.state)}
                </div>

                <div className="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>


            <div className="col m5 s12">
              <div className="card">
                <div className="card-image">
                  <span className="card-title">Link to Students</span>
                </div>

                <div className="card-content">
                  <ul class="collection">
                     <li className="collection-item avatar">
                       <span className="card-title">Link to Students</span>
                       <img src={this.props.user.avatar_url}  alt="GithubImage" className="circle gituser"/>
                       <span className="title"><strong>{this.props.user.name}</strong></span>
                        <p className="userInfo">  Student Availability: {this.state.user.availability}</p>
                        <p className="userInfo"> Tech Stack: {this.state.user.tech}</p>
                       {/* <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a> */}
                     </li>
                   </ul>
                </div>

                <div className="card-action">
                  <Link to="/linkToStudents">Link to Students</Link>
                </div>
              </div>
            </div>
        </div>

      </div>
    )
  }

}


export default DeveloperProfile;
