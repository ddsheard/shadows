import React, { Component } from 'react';



class AddDevForm extends Component {
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
    this.props.addDeveloperInput(dev);
    this.devForm.reset();
  }

  render() {
    return (

      <div className="row">
        <div className="col s12 m6">
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
                <label>Teck Stack</label>
                <select ref={(input) => this.tech = input} className="browser-default">
                  <option value="" disabled selected>Choose your option</option>
                  <option value="1">JavaScript</option>
                  <option value="2">Java</option>
                  <option value="3">PHP</option>
                  <option value="3">Python</option>
                  <option value="3">Ruby on Rails</option>
                </select>
              </div>
              <br/>

                <button className="waves-effect waves-light btn" type="submit"> Add Developer Information</button>
              </form>
            </div>

          </div>
        </div>
      </div>

    )
  }
}

export default AddDevForm;
