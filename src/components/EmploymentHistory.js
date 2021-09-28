import React, { Component } from 'react';

class EmploymentHistoryInput extends Component {
  render() {
    return (
      <div>
        <form
          onSubmit={(e) =>
            this.props.submitInputState(e, e.target.dataset.category)
          }
          data-category="employmentHistory"
          data-section="employmentHistoryInput"
          className="input-form"
          id="employmentHistoryForm"
        >
          <label htmlFor="employmentHistoryCompanyInput">Company: </label>
          <input
            type="text"
            onChange={(e) =>
              this.props.updateInputState(
                e,
                e.target.dataset.category,
                e.target.dataset.field
              )
            }
            data-category="employmentHistory"
            data-section="employmentHistoryInput"
            data-field="company"
            className="input-field"
            id="employmentHistoryCompanyInput"
          />

          <label htmlFor="employmentHistoryTitleInput">Job Title: </label>
          <input
            type="text"
            onChange={(e) =>
              this.props.updateInputState(
                e,
                e.target.dataset.category,
                e.target.dataset.field
              )
            }
            data-category="employmentHistory"
            data-section="employmentHistoryInput"
            data-field="title"
            className="input-field"
            id="employmentHistoryTitleInput"
          />

          <label htmlFor="employmentHistoryStartInput">Start Date: </label>
          <input
            type="text"
            onChange={(e) =>
              this.props.updateInputState(
                e,
                e.target.dataset.category,
                e.target.dataset.field
              )
            }
            data-category="employmentHistory"
            data-section="employmentHistoryInput"
            data-field="start"
            className="input-field"
            id="employmentHistoryStartInput"
          />

          <label htmlFor="employmentHistoryEndInput">End Date: </label>
          <input
            type="text"
            onChange={(e) =>
              this.props.updateInputState(
                e,
                e.target.dataset.category,
                e.target.dataset.field
              )
            }
            data-category="employmentHistory"
            data-section="employmentHistoryInput"
            data-field="end"
            className="input-field"
            id="employmentHistoryStartInput"
          />

          <label htmlFor="employmentHistoryDescriptionInput">
            Desicrption:{' '}
          </label>

          <textarea
            onChange={(e) =>
              this.props.updateInputState(
                e,
                e.target.dataset.category,
                e.target.dataset.field
              )
            }
            data-category="employmentHistory"
            data-section="employmentHistoryInput"
            data-field="description"
            className="input-field"
            id="employmentHistoryDescriptionInput"
            rows="4"
            cols="50"
          ></textarea>

          <button
            type="submit"
            data-category="employmentHistory"
            data-section="employmentHistoryInput"
            className="section-submit-button"
            id="employmentHistorySubmitButton"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

class EmploymentHistoryPreview extends Component {
  render() {
    return (
      <div>
        <h2 id="companyPreview">
          {this.props.employmentHistoryStore[0].company}
        </h2>
        <h2 id="titlePreview">{this.props.employmentHistoryStore[0].title}</h2>
        <h2 id="startPreview">{this.props.employmentHistoryStore[0].start}</h2>
        <h2 id="endPreview">{this.props.employmentHistoryStore[0].end}</h2>
        <h2 id="descriptionPreview">
          {this.props.employmentHistoryStore[0].description}
        </h2>
      </div>
    );
  }
}

export default class EmploymentHistory extends Component {
  render() {
    return (
      <div>
        <h2 className="section-header">Employment History</h2>
        {this.props.employmentHistory.employmentHistoryPreview ? (
          <EmploymentHistoryPreview
            employmentHistoryStore={
              this.props.employmentHistory.employmentHistoryStore
            }
          />
        ) : (
          <EmploymentHistoryInput
            updateInputState={this.props.updateInputState}
            submitInputState={this.props.submitInputState}
            employmentHistoryStore={
              this.props.employmentHistory.employmentHistoryStore
            }
            employmentHistoryPreview={
              this.props.employmentHistory.employmentHistoryPreview
            }
          />
        )}
      </div>
    );
  }
}
