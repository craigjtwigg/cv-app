import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <h2 className="section-header">Profile</h2>

        <form
          onSubmit={(e) =>
            this.props.submitInputState(e, e.target.dataset.category)
          }
          data-category="profile"
          data-section="profileInput"
          className="input-form"
          id="profileForm"
        >
          <textarea
            onChange={(e) =>
              this.props.updateInputState(
                e,
                e.target.dataset.category,
                e.target.dataset.field
              )
            }
            id="profileInput"
            name="profileInput"
            data-category="profile"
            data-section="profileInput"
            data-field="profile"
            className="input-field"
            rows="4"
            cols="50"
          ></textarea>

          <button
            type="submit"
            className="section-submit-button"
            id="profileSubmitButton"
            data-category="profile"
            data-section="profileInput"
          >
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}
