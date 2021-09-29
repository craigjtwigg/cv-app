import React, { Component } from 'react';

//'Input Mode' sub-component//

class PersonalDetailsInput extends Component {
  render() {
    return (
      <div>
         <h2 className="section header">Personal Details</h2>
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
            value={`${this.props.personalDetailsValues.name}`}
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
            value={`${this.props.personalDetailsValues.email}`}
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
            value={`${this.props.personalDetailsValues.phone}`}
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
    return this.props.personalDetailsStore.map((item) => (
      <div className="personalDetailsPreview" key={`personalDetailsPreview:${item.key}`}>
        <h2 key={`namePreview:${item.key}`} id="namePreview">
          {item.name}
        </h2>
        <p key={`emailPreview:${item.key}`} id="emailPreview">
          {item.email}
        </p>
        <p key={`phonePreview:${item.key}`} id="phonePreview">
          {item.phone}
        </p>
      </div>
    ));
  }
}

//sub-components to be toggled within the main component using conditional rendering dependant on 'mode' state//

export default class PersonalDetails extends Component {
  render() {
    return (
      <section className="personalDetails">
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
            personalDetailsValues={
              this.props.personalDetails.personalDetailsInput
            }
          />
        )}
      </section>
    );
  }
}
