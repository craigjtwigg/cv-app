import React, { Component } from 'react';

class SkillsInput extends Component {
  render() {
    return (
      <div>
        <form
          onSubmit={(e) =>
            this.props.submitInputState(e, e.target.dataset.category, e.target.dataset.key)
          }
          data-key={`${this.props.skillsValues.key}`}
          data-category="skills"
          data-section="skillsInput"
          className="input-form"
          id="skillsForm"
        >
          <label htmlFor="skillsInput"></label>
          <textarea
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
          ></textarea>

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
        <button onClick={() => this.props.toggleView(`skills`)} data-key={`${item.key}`} key={`${item.key}`} type="button">EDIT</button>
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
          <SkillsPreview skillsStore={this.props.skills.skillsStore} 
          toggleView={this.props.toggleView} />
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
