import React, { Component } from 'react';

class EmploymentHistoryInput extends Component {
  render() {
    return (
      <div>
        <form
          onSubmit={(e) =>
            this.props.submitInputState(e, e.target.dataset.category, e.target.dataset.key)
          }
          data-key={`${this.props.employmentHistoryValues.key}`}
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
            value={`${this.props.employmentHistoryValues.company}`}
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
            value={`${this.props.employmentHistoryValues.title}`}
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
            value={`${this.props.employmentHistoryValues.start}`}
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
            value={`${this.props.employmentHistoryValues.end}`}
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
            value={`${this.props.employmentHistoryValues.description}`}
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
    return this.props.employmentHistoryStore.map((item) => (
      <div
        className="employmentHistoryPreview"
        key={`employmentHistoryPreview:${item.key}`}
      >
        <h3
          key={`employmentHistoryCompanyPreview:${item.key}`}
          id="companyPreview"
        >
          {item.company}
        </h3>
        <h4 key={`employmentHistoryTitlePreview:${item.key}`} id="titlePreview">
          {item.title}
        </h4>
        <div className="startEnd">
          <p
            key={`employmentHistoryStartPreview:${item.key}`}
            id="startPreview"
          >
            {item.start} - 
          </p>
          <p key={`employmentHistoryEndPreview:${item.key}`} id="endPreview">
            {item.end}
          </p>
        </div>

        <p
          key={`employmentHistoryDescriptionPreview:${item.key}`}
          id="descriptionPreview"
        >
          {item.description}
        </p>
        <button onClick={() => this.props.toggleView(`employmentHistory`)} data-key={`${item.key}`} key={`${item.key}`} type="button">EDIT</button>
         
      </div>
    ));
  }
}

export default class EmploymentHistory extends Component {
  render() {
    return (
      
      <section className="employmentHistory">
        <h2 className="section-header">Employment History</h2>
        {this.props.employmentHistory.employmentHistoryPreview ? (
          <>
          <EmploymentHistoryPreview
            employmentHistoryStore={
              this.props.employmentHistory.employmentHistoryStore
            }
            toggleView={this.props.toggleView}
          />
         
          </>
        ) : (
          <EmploymentHistoryInput
            updateInputState={this.props.updateInputState}
            submitInputState={this.props.submitInputState}
            employmentHistoryStore={
              this.props.employmentHistory.employmentHistoryStore
            }

            employmentHistoryValues={
              this.props.employmentHistory.employmentHistoryInput
            }
            employmentHistoryAddMoreMode={this.props.employmentHistory.employmentHistoryAddMoreMode}
          />
        )}
               {this.props.employmentHistory.employmentHistoryAddMoreMode ? (
          <EmploymentHistoryInput
            updateInputState={this.props.updateInputState}
            submitInputState={this.props.submitInputState}
            employmentHistoryStore={
              this.props.employmentHistory.employmentHistoryStore
            }
            employmentHistoryValues={
              this.props.employmentHistory.employmentHistoryInput
            }
            employmentHistoryAddMoreMode={this.props.employmentHistory.employmentHistoryAddMoreMode}
          />
        ) : null}
         <button onClick={() => this.props.toggleAddMore('employmentHistory')} type="button">ADD MORE</button>
      </section>
    );
  }
}
