import React, { Component } from "react";
import StudentProfile from './StudentProfile';
import { Redirect } from 'react-router-dom';
import base from './rebase';

class AddStuForm extends Component {

  constructor() {
    super()
    this.state = {
      user: []
    }
  }

  submitStuForm(event) {
    event.preventDefault();
    console.log("Page is good to move on");
    const stu = {
      availability: this.availability.value,
      objectives: this.objectives.value,
      expertise: this.expertise.value,
      goals: this.goals.value,
      tech: this.tech.value,
    }

    console.log(stu);
    // this.props.addStudentInput(stu);
    // this.stuForm.reset();


  let uid = this.props.user.uid
  base.update(`user/${uid}`, {
    data: {
      availability: stu.availability,
      objectives: stu.objectives,
      expertise: stu.expertise,
      goals: stu.goals,
      tech: stu.tech
    }

  })

  this.setState({
    submit: true
  })

}
  render() {
    if (this.state.submit === true) {
      return (<Redirect to='/studentprofile' />)
    }

    // this.receiveUserInformation();

    return(
        <div className="row">
          <div className="col s12 m12">
            <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Student Information Form</span>
                <form ref={(input) => this.stuForm = input} className="stu-edit" onSubmit={(e) => this.submitStuForm(e)}>
                <input ref={(input) => this.availability = input} type="text" placeholder="Student Availability" />
                <div>
                  <textarea ref={(input) => this.objectives = input} type="text" className="materialize-textarea" placeholder="Student Objectives"></textarea>
                </div>
                <div>
                  <textarea ref={(input) => this.expertise = input} type="text" className="materialize-textarea" placeholder="Student Experience"></textarea>
                </div>
                <div>
                  <textarea ref={(input) => this.goals = input} type="text" className="materialize-textarea" placeholder="Student Goals">
                  </textarea>
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
                <br />

                  <button className="waves-effect waves-light btn" onClick={this.submitStuForm.bind(this)} type="submit">Add Student Information</button>
              </form>

            </div>
            </div>
          </div>
        </div>
    )
  }
}

export default AddStuForm;
