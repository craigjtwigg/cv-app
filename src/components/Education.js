import React, { Component } from 'react';

class EducationInput extends Component {
  render() {
    return (
      <div>
        <form
          onSubmit={(e) =>
            this.props.submitInputState(e, e.target.dataset.category)
          }
          data-category="education"
          data-section="educationInput"
          className="input-form"
          id="educationForm"
        >
          <label htmlFor="educationSchoolInput">
            School / College / University:{' '}
          </label>
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

          <label htmlFor="educationQualificationsInput">Qualifications:</label>

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

class EducationPreview extends Component {
  render() {
    return (
      <div>
        <h2 id="schoolPreview">{this.props.educationStore[0].school}</h2>

        <h2 id="startSchoolPreview">{this.props.educationStore[0].start}</h2>
        <h2 id="endSchoolPreview">{this.props.educationStore[0].end}</h2>
        <h2 id="qualificationsPreview">
          {this.props.educationStore[0].qualifications}
        </h2>
      </div>
    );
  }
}

export default class Education extends Component {
  render() {
    return (
      <div>
        <h2 className="section-header">Education</h2>
        {this.props.education.educationPreview ? (
          <EducationPreview
            educationStore={this.props.education.educationStore}
          />
        ) : (
          <EducationInput
            updateInputState={this.props.updateInputState}
            submitInputState={this.props.submitInputState}
            educationStore={this.props.education.educationStore}
            educationPreview={this.props.education.educationPreview}
          />
        )}
      </div>
    );
  }
}
