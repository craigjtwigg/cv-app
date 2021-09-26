import './styles/App.css';
import Header from './components/Header';
import PersonalDetails from './components/PersonalDetails';
import Profile from './components/Profiile';
import Skills from './components/Skills';
import Education from './components/Education';
import EmploymentHistory from './components/EmploymentHistory';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalDetails: {
        personalDetailsInput: {
          name: '',
          email: '',
          phone: '',
        },

        personalDetailsStore: []
      },
    };

    this.updateInputState = this.updateInputState.bind(this);
    this.submitInputState = this.submitInputState.bind(this);
  }

  //onChange function to update the state of the targeted input field//

  updateInputState = (e, section, category, field) => {
    const sectionPreviousState = this.state[category][section];
    const storedState = this.state[category][`${category}Store`];
    this.setState({
      [category]: {
        [section]: {
          ...sectionPreviousState,
          [field]: e.target.value,
          key: uuidv4(),
        },
        [`${category}Store`]: storedState,
      
      },
    });
    setTimeout(() => console.log(this.state[`${category}`][`${section}`]), 100);
  };

  //onSubmit function to update the stored state of the given section//

  submitInputState = (e, section) => {
    e.preventDefault();
    if (section === 'personalDetailsInput') {
      this.setState({
        personalDetails: {
          personalDetailsInput: {
            ...this.state.personalDetails.personalDetailsInput,
          },
          personalDetailsStore: this.state.personalDetails.personalDetailsStore.concat(this.state.personalDetails.personalDetailsInput),
        },
      });
      setTimeout(
        () => console.log(this.state.personalDetails.personalDetailsStore),
        100
      );
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
          personalDetailsStore={personalDetailsStore}
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
