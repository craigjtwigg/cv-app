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

      PersonalDetailsStore: {
        name: '',
        email: '',
        phone: '',
      },
    };

    this.updateInputState = this.updateInputState.bind(this);
    this.submitInputState = this.submitInputState.bind(this);
  }

  updateInputState = (e, section, field) => {
    const previousState = this.state[section] 
    this.setState({
      [section]: {
        ...previousState,
        [field]: e.target.value,
      },
    });
    setTimeout(() => console.log(this.state[`${section}`]), 100);
  };

  submitInputState = (e, section) => {
    e.preventDefault();
    if (section === 'personalDetailsInput') {
      this.setState({
        PersonalDetailsStore: {
          name: this.state.personalDetailsInput.name,
          email: this.state.personalDetailsInput.email,
          phone: this.state.personalDetailsInput.phone,
        },
      });
      setTimeout(() => console.log(this.state.PersonalDetailsStore), 100);
    }
    return;
  };

  render() {
    //const { personalDetailsInput, PersonalDetailsStore } = this.state;

    return (
      <>
        <Header />
        <PersonalDetails updateInputState={this.updateInputState} submitInputState={this.submitInputState}/>
        <Profile updateInputState={this.updateInputState} />
        <EmploymentHistory updateInputState={this.updateInputState} />
        <Skills updateInputState={this.updateInputState} />
        <Education updateInputState={this.updateInputState} />
      </>
    );
  }
}
