import React, { Component } from 'react';

export default class Education extends Component {
  render() {
    return (
      <div>
        <h2 className="section-header">Education</h2>

        <form
          onSubmit={(e) =>
            this.props.submitInputState(e, e.target.dataset.category)
          }
          data-category="education"
          data-section="educationInput"
          className="input-form"
          id="educationForm"
        >
          <label htmlFor="educationSchoolInput">School / College / University: </label>
          <input
            type="text"
            onChange={(e) =>
              this.props.updateInputState(
                e,
                e.target.dataset.category,
                e.target.dataset.field
              )
            }
            data-category="education"
            data-section="educationInput"
            data-field="school"
            className="input-field"
            id="educationSchoolInput"
          />

         
          <label htmlFor="educationStartInput">Start Date: </label>
          <input
            type="text"
            onChange={(e) =>
              this.props.updateInputState(
                e,
                e.target.dataset.category,
                e.target.dataset.field
              )
            }
            data-category="education"
            data-section="educationInput"
            data-field="start"
            className="input-field"
            id="educationStartInput"
          />

          <label htmlFor="educationEndInput">End Date: </label>
          <input
            type="text"
            onChange={(e) =>
              this.props.updateInputState(
                e,
                e.target.dataset.category,
                e.target.dataset.field
              )
            }
            data-category="education"
            data-section="educationInput"
            data-field="end"
            className="input-field"
            id="educationStartInput"
          />

          <label htmlFor="educationQualificationsInput">
            Qualifications:
          </label>

          <textarea
            onChange={(e) =>
              this.props.updateInputState(
                e,
                e.target.dataset.category,
                e.target.dataset.field
              )
            }
            data-category="education"
            data-section="educationInput"
            data-field="qualifications"
            className="input-field"
            id="employmentQualificationsInput"
            rows="4"
            cols="50"
          ></textarea>

          <button
            type="submit"
            data-category="education"
            data-section="educationInput"
            className="section-submit-button"
            id="educationSubmitButton"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
