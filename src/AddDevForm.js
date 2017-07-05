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
    let dev = {}

    dev.login = this.props.user.login;
    dev.name = this.props.user.name;
    dev.avatar = this.props.user.avatar_url;
    dev.uid = this.props.user.uid;


    if (this.company.value) {
      dev.company = this.company.value
    }
    if (this.availability.value) {
      dev.availability = this.availability.value
    }
    if (this.url.value) {
      dev.url = this.url.value
    }
    if (this.address.value) {
      dev.address = this.address.value
    }
    if (this.objectives.value) {
      dev.objectives = this.objectives.value
    }
    if (this.interests.value) {
      dev.interests = this.interests.value
    }
    if (this.expertist.value) {
      dev.expertist = this.expertist.value
    }
    if (this.tech.value) {
      dev.tech = this.tech.value
    }
    // if (dev.tech = this.tech.value) {
    //   dev.tech = this.tech.value
    // }

    let uid = this.props.user.uid;
    let type = this.props.type;
    this.props.addDeveloperInput(dev, uid, type);
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
                  <option value="JavaScript">JavaScript</option>
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
