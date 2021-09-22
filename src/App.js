import './styles/App.css';
import Header from './components/Header';
import PersonalDetails from './components/PersonalDetails';
import Profile from './components/Profiile';
import Skills from './components/Skills';
import Education from './components/Education';
import EmploymentHistory from './components/EmploymentHistory';
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalDetailsInput: {
        name: '',
        email: '',
        phone: '',
      },

      personalDetailsStore: {
        name: '',
        email: '',
        phone: '',
      },
    };

    this.updateInputState = this.updateInputState.bind(this);
    this.submitInputState = this.submitInputState.bind(this);
  }

  //onChange function to update the state of the targeted input field//

  updateInputState = (e, section, field) => {
    const previousState = this.state[section];
    this.setState({
      [section]: {
        ...previousState,
        [field]: e.target.value,
      },
    });
    setTimeout(() => console.log(this.state[`${section}`]), 100);
  };

  //onSubmit function to update the stored state of the given section//

  submitInputState = (e, section) => {
    e.preventDefault();
    if (section === 'personalDetailsInput') {
      this.setState({
        personalDetailsStore: {
          name: this.state.personalDetailsInput.name,
          email: this.state.personalDetailsInput.email,
          phone: this.state.personalDetailsInput.phone,
        },
      });
      setTimeout(() => console.log(this.state.personalDetailsStore), 100);
    }
    return;
  };

  render() {
    const { personalDetailsStore } = this.state;
    const submitInputState = this.submitInputState;
    const updateInputState = this.updateInputState;

    return (
      <>
        <Header />
        <PersonalDetails
          updateInputState={updateInputState}
          submitInputState={submitInputState}
          personalDetailsStore ={personalDetailsStore}
        />
        <Profile
          updateInputState={updateInputState}
          submitInputState={submitInputState}
        />
        <EmploymentHistory
          updateInputState={updateInputState}
          submitInputState={submitInputState}
        />
        <Skills
          updateInputState={updateInputState}
          submitInputState={submitInputState}
        />
        <Education
          updateInputState={updateInputState}
          submitInputState={submitInputState}
        />
      </>
    );
  }
}
