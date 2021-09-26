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

        personalDetailsStore: [],
      },
    };

    this.updateInputState = this.updateInputState.bind(this);
    this.submitInputState = this.submitInputState.bind(this);
    this.generateId = this.generateId.bind(this);
  }

  //onChange function to update the state of the targeted input field//

  updateInputState = (e, category, field) => {
    const sectionPreviousState = this.state[category][`${category}Input`];
    const storedState = this.state[category][`${category}Store`];
    this.setState({
      [category]: {
        [`${category}Input`]: {
          ...sectionPreviousState,
          [field]: e.target.value,
        },
        [`${category}Store`]: storedState,
      },
    });
  };

//uuid used to asign a unique ID//

  generateId = (category) => {
    this.setState({
      [category]: {
        [`${category}Input`]: {
          ...this.state[category][`${category}Input`],
          key: uuidv4(),
        },
        [`${category}Store`]: this.state[category][`${category}Store`],
      },
    });
  };

  //method to store the state of the inputted data, set timeout used to allow for the state to be set by the generateID method first//

  storeCategoryState = (category) => {
    setTimeout(() => {
      this.setState({
        [category]: {
          [`${category}Input`]: {
            ...this.state[category][`${category}Input`],
          },
          [`${category}Store`]: this.state[category][`${category}Store`].concat(
            this.state[category][`${category}Input`]
          ),
        },
      });
    }, 100);
  };

  //onSubmit function to update the stored state of the given section with a unique ID//

  submitInputState = (e, category) => {
    e.preventDefault();
    this.generateId(category);
    setTimeout(this.storeCategoryState(category), 6000);

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
