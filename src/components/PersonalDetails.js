import React, { Component } from 'react';

export default class PersonalDetails extends Component {
  render() {
    return (
      <div>
        <h2 className="section header">Personal Details</h2>
        <form className="input-form" id="personal-details-form">
          <label htmlFor="personal-details-name-input">Name: </label>
          <input type="text" className="input-field" id="personal-details-name-input" />

          <label htmlFor="personal-details-email-input">Email: </label>
          <input type="email" className="input-field" id="personal-details-email-input" />

          <label htmlFor="personal-details-phone-input">Phone: </label>
          <input type="text" className="input-field" id="personal-details-phone-input" />

          <button type="submit" className="section-submit-button" id="personal-details-submit-button">Submit</button>
        </form>
      </div>
    );
  }
}
