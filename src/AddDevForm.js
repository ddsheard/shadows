import React, { Component } from 'react';
import DeveloperProfile from './DeveloperProfile';
import { Redirect } from 'react-router-dom';
import base from './rebase';


class AddDevForm extends Component {
  constructor(){
    super()
    this.state = {
      user: []
    }
  }

  submitDevForm(event) {
    event.preventDefault();
    console.log('Page is good to move on');
    const dev = {
      availability: this.availability.value,
      company: this.company.value,
      url: this.url.value,
      address: this.address.value,
      objectives: this.objectives.value,
      interests: this.interests.value,
      expertist: this.expertist.value,
      tech: this.tech.value,
    }

    console.log(dev);
    // this.props.addDeveloperInput(dev);
    // this.devForm.reset();

  let uid = this.props.user.uid
  base.update(`user/${uid}`, {
    data: {
      availability: dev.availability,
      company: dev.company,
      url: dev.url,
      address: dev.address,
      objectives: dev.objectives,
      interests: dev.interests,
      expertist: dev.expertist,
      tech: dev.tech
    }
  })

  this.setState({
    submit: true
  })
}


  render() {
    if (this.state.submit === true) {
     return (<Redirect to="/developerprofile" />)
   }
    return (

      <div className="row">
        <div className="col s12 m12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Developer Form</span>
              <form ref={(input) => this.devForm = input} className="dev-edit" onSubmit={(e) => this.submitDevForm(e)}>
                <input ref={(input) => this.availability = input} type="text" placeholder="Developer Availability" />
                <input ref={(input) => this.company = input} type="text" placeholder="Developer Company" />
                <input ref={(input) => this.url = input} type="text" placeholder="Developer Company URL" />
                <input ref={(input) => this.address = input} type="text" placeholder="Developer Company Address" />
                <div>
                <textarea ref={(input) => this.objectives = input} type="text" className="materialize-textarea" placeholder="Developer Objectives"></textarea>
                </div>
                <div>
                <textarea ref={(input) => this.interests = input} type="text" className="materialize-textarea" placeholder="Developer Interests"></textarea>
                </div>
                <div>
                <textarea ref={(input) => this.expertist = input} type="text" className="materialize-textarea" placeholder="Developer Expertist"></textarea>
                </div>
                <div>
                <label>Tech Stack</label>
                <select ref={(input) => this.tech = input} className="browser-default">
                  <option value="" disabled selected>Choose your option</option>
                  <option value="JS">JavaScript</option>
                  <option value="Java">Java</option>
                  <option value="PHP">PHP</option>
                  <option value="Python">Python</option>
                  <option value="Rails">Ruby on Rails</option>
                </select>
              </div>
              <br/>

                <button className="waves-effect waves-light btn" onClick={this.submitDevForm.bind(this)} type="submit"> Add Developer Information</button>
              </form>
            </div>

          </div>
        </div>
      </div>

    )
  }
}

export default AddDevForm;
