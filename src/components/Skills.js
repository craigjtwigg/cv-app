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
    )
  }
}

class SkillsPreview extends Component {
  render() {
    return (
      <div>
         <h2 id="skillsPreview">{this.props.skillsStore[0].skill}</h2>
      </div>
    )
  }
}

export default class Skills extends Component {
  render() {
    return (
     
      <div>
        <h2>Skills</h2>

           {this.props.skills.skillsPreview ? (
          <SkillsPreview
            skillsStore={this.props.skills.skillsStore}
          />
        ) : (
          <SkillsInput
            updateInputState={this.props.updateInputState}
            submitInputState={this.props.submitInputState}
            skillsStore={this.props.skills.skillsStore}
            skillsPreview={this.props.skills.skillsPreview}
          />
        )}


      </div>


    );
  }
}
