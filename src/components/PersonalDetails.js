import React, { Component } from 'react';

//'Input Mode' sub-component//

class PersonalDetailsInput extends Component {
  render() {
    return (
      <div>
        <form
          onSubmit={(e) =>
            this.props.submitInputState(e, e.target.dataset.category)
          }
          data-category="personalDetails"
          data-section="personalDetailsInput"
          className="input-form"
          id="personalDetailsForm"
        >
          <label htmlFor="personalDetailsNameInput">Name: </label>
          <input
            type="text"
            onChange={(e) =>
              this.props.updateInputState(
                e,
                e.target.dataset.category,
                e.target.dataset.field
              )
            }
            data-category="personalDetails"
            data-section="personalDetailsInput"
            data-field="name"
            className="input-field"
            id="personalDetailsNameInput"
          />

          <label htmlFor="personalDetailsEmailInput">Email: </label>
          <input
            type="email"
            onChange={(e) =>
              this.props.updateInputState(
                e,
                e.target.dataset.category,
                e.target.dataset.field
              )
            }
            data-category="personalDetails"
            data-section="personalDetailsInput"
            data-field="email"
            className="input-field"
            id="personalDetailsEmailInput"
          />

          <label htmlFor="personalDetailsPhoneInput">Phone: </label>
          <input
            type="text"
            onChange={(e) =>
              this.props.updateInputState(
                e,
                e.target.dataset.category,
                e.target.dataset.field
              )
            }
            data-category="personalDetails"
            data-section="personalDetailsInput"
            data-field="phone"
            className="input-field"
            id="personalDetailsPhoneInput"
          />

          <button
            type="submit"
            data-category="personalDetails"
            data-section="personalDetailsInput"
            className="section-submit-button"
            id="personalDetailsSubmitButton"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

class PersonalDetailsPreview extends Component {
  render() {
    return (
      <div>
        <h2 id="namePreview">{this.props.personalDetailsStore[0].name}</h2>
        <h2 id="emailPreview">{this.props.personalDetailsStore[0].email}</h2>
        <h2 id="phonePreview">{this.props.personalDetailsStore[0].phone}</h2>
      </div>
    );
  }
}

//sub-components to be toggled within the main component using conditional rendering dependant on 'mode' state//

export default class PersonalDetails extends Component {
  render() {
    return (
      <div>
        <h2 className="section header">Personal Details</h2>
        {this.props.personalDetails.personalDetailsPreview ? (
          <PersonalDetailsPreview
            personalDetailsStore={
              this.props.personalDetails.personalDetailsStore
            }
          />
        ) : (
          <PersonalDetailsInput
            updateInputState={this.props.updateInputState}
            submitInputState={this.props.submitInputState}
            personalDetailsStore={
              this.props.personalDetails.personalDetailsStore
            }
            personalDetailsPreview={
              this.props.personalDetails.personalDetailsPreview
            }
          />
        )}
      </div>
    );
  }
}
