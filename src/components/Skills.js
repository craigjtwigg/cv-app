import React, { Component } from 'react';

class SkillsInput extends Component {
  render() {
    return (
      <div>
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
            value={`${this.props.skillsValues.skill}`}
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

class SkillsPreview extends Component {
  render() {
    return this.props.skillsStore.map((item) => (
      <div className="skillsPreview" key={`skillsPreview:${item.key}`}>
        <p key={`skillPreview:${item.key}`} id="skillsPreview">
          {item.skill}
        </p>
      </div>
    ));
  }
}

export default class Skills extends Component {
  render() {
    return (
      <section className="skills">
        <h2>Skills</h2>

        {this.props.skills.skillsPreview ? (
          <SkillsPreview skillsStore={this.props.skills.skillsStore} />
        ) : (
          <SkillsInput
            updateInputState={this.props.updateInputState}
            submitInputState={this.props.submitInputState}
            skillsStore={this.props.skills.skillsStore}
            skillsPreview={this.props.skills.skillsPreview}
            skillsValues={this.props.skills.skillsInput}
          />
        )}
      </section>
    );
  }
}
