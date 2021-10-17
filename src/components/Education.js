import React, { Component } from 'react';

class EducationInput extends Component {
  render() {
    return (
      <div>
        <form
          onSubmit={(e) =>
            this.props.submitInputState(e, e.target.dataset.category, e.target.dataset.key)
          }
          data-key={`${this.props.educationValues.key}`}
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
            value={`${this.props.educationValues.school}`}
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
            value={`${this.props.educationValues.start}`}
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
            id="educationEndInput"
            value={`${this.props.educationValues.end}`}
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
            value={`${this.props.educationValues.qualifications}`}
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
    return this.props.educationStore.map((item) => (
      <div className="educationPreview" key={`educationPreview:${item.key}`}>
        <h3 key={`educationSchoolPreview:${item.key}`} id="schoolPreview">
          {item.school}
        </h3>
        <div className="startEnd">
          <p key={`educationStartPreview:${item.key}`} id="startSchoolPreview">
            {item.start} - 
          </p>
          <p key={`educationEndPreview:${item.key}`} id="endSchoolPreview">
            {item.end}
          </p>
        </div>

        <p
          key={`educationQualificationsPreview:${item.key}`}
          id="qualificationsPreview"
        >
          {item.qualifications}
        </p>
        <button onClick={() => this.props.toggleView(`education`)} data-key={`${item.key}`} key={`${item.key}`} type="button">EDIT</button>
      </div>
    ));
  }
}

export default class Education extends Component {
  render() {
    return (
      <section className="education">
        <h2 className="section-header">Education</h2>
        {this.props.education.educationPreview ? (
          <EducationPreview
            educationStore={this.props.education.educationStore}
            toggleView={this.props.toggleView}
          />
        ) : (
          <EducationInput
            updateInputState={this.props.updateInputState}
            submitInputState={this.props.submitInputState}
            educationStore={this.props.education.educationStore}
            educationPreview={this.props.education.educationPreview}
            educationValues={this.props.education.educationInput}
          />
        )}
      </section>
    );
  }
}
