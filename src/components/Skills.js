import React, { Component } from 'react';

export default class Skills extends Component {
  render() {
    return (
      <div>
        <h2 className="section-header">Skills</h2>

        <form
          onSubmit={(e) =>
            this.props.submitInputState(e, e.target.dataset.category)
          }
          data-category="skills"
          data-section="skillsInput"
          className="input-form"
          id="skillsForm"
        >
          <label htmlFor="skillsInput">Add a Skill: </label>
          <input
            type="text"
            onChange={(e) =>
              this.props.updateInputState(
                e,
                e.target.dataset.category,
                e.target.dataset.field
              )
            }
            id="skillsInput"
            name="skillsInput"
            data-category="skills"
            data-section="skillsInput"
            data-field="skill"
            className="input-field"
          ></input>

          <button
            type="submit"
            className="section-submit-button"
            id="skillsSubmitButton"
            data-category="skills"
            data-section="skillsInput"
          >
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}
