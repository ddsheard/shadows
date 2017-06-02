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





// componentDidMount() {
//   let uid = this.props.user.uid
//   base.fetch(`user/${uid}`, {
//     context: this,
//     asArray: false,
//     then(data){
//       console.log(data);
//       this.setState({user: data})
//     }
//   });
// }


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
    return (
      <div className="container">
        <br/><br/><br/>
        <div className="notification">
          <img className="circle" src={this.props.user.avatar_url} />
          <p className="noTop">Hi {this.props.user.name}, you have a New Shadow. </p>
        </div>
          <div className="row">
            <div className="col m7 s12">
              <div className="card">
                <div className="card-image">
                  <img src="images/lemuel-butler.jpg"/>
                  <span className="card-title">Card Title</span>
                </div>

                <div className="card-content">

                 <p>I am a very simple card. I am good at containing small bits of information.
                 I am convenient because I require little markup to use effectively.</p>
                </div>

                <div className="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>



            <div className="col m5 s12">
              <div className="card">
                <div className="card-image">
                  <img src="images/lemuel-butler.jpg"/>
                  <span className="card-title">Card Title</span>
                </div>

                <div className="card-content">
                 <p>I am a very simple card. I am good at containing small bits of information.
                 I am convenient because I require little markup to use effectively.</p>
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
