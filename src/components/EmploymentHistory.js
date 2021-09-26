import React, { Component } from 'react'

export default class EmploymentHistory extends Component {
    render() {
        return (
            <div>
                <h2 className="section-header">
                    Employment History
                </h2>

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

          <label htmlFor="employmentHistoryDescriptionInput">Desicrption: </label>

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
        )
    }
}
