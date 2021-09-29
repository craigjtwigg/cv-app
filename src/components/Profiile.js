import React, { Component } from 'react';

class ProfilePreview extends Component {
  render() {
    return this.props.profileStore.map((item) => (
      <div className="profilePreview" key={`profilePreview:${item.key}`}>
        <h2 key={`profilePreview:${item.key}`} id="profilePreview">
          {item.profile}
        </h2>
      </div>
    ));
  }
}

class ProfileInput extends Component {
  render() {
    return (
      <div className="profile">
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
            value={`${this.props.profileValues.profile}`}
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

export default class Profile extends Component {
  render() {
    return (
      <div>
        <h2 className="section-header">Profile</h2>
        {this.props.profile.profilePreview ? (
          <ProfilePreview profileStore={this.props.profile.profileStore} />
        ) : (
          <ProfileInput
            updateInputState={this.props.updateInputState}
            submitInputState={this.props.submitInputState}
            profileStore={this.props.profile.profileStore}
            profilePreview={this.props.profile.profilePreview}
            profileValues={this.props.profile.profileInput}
          />
        )}
      </div>
    );
  }
}
