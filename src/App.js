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
          isInitialInput: true,
        },
        personalDetailsStore: [],
        personalDetailsPreview: false,
      },
      profile: {
        profileInput: {
          profile: '',
          isInitialInput: true,
        },
        profileStore: [],
        profilePreview: false,
      },
      employmentHistory: {
        employmentHistoryInput: {
          company: '',
          title: '',
          start: '',
          end: '',
          description: '',
          isInitialInput: true,
        },
        employmentHistoryStore: [],
        employmentHistoryPreview: false,
      },
      skills: {
        skillsInput: {
          skill: '',
          isInitialInput: true,
        },
        skillsStore: [],
        skillsPreview: false,
      },
      education: {
        educationInput: {
          school: '',
          start: '',
          end: '',
          qualifications: '',
          isInitialInput: true,
        },
        educationStore: [],
        educationPreview: false,
      },
    };

    this.updateInputState = this.updateInputState.bind(this);
    this.submitInputState = this.submitInputState.bind(this);
    this.generateId = this.generateId.bind(this);
    this.toggleView = this.toggleView.bind(this);
  }

  //onChange function to update the state of the targeted input field//

  updateInputState = (e, category, field) => {
    const sectionPreviousState = this.state[category][`${category}Input`];
    const storedState = this.state[category][`${category}Store`];
    this.setState({
      ...this.state,
      [category]: {
        [`${category}Input`]: {
          ...sectionPreviousState,
          [field]: e.target.value,
        },
        [`${category}Store`]: storedState,
        [`${category}Preview`]: this.state[category][`${category}Preview`],
      },
    });
  };

  //method to toggle between input and preview modes//

  toggleView = (category) => {
    this.setState({
      ...this.state,
      [`${category}Preview`]: !this.state[category][`${category}Preview`],
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
        ...this.state,
        [category]: {
          [`${category}Input`]: {
            ...this.state[category][`${category}Input`],
          },
          [`${category}Store`]: this.state[category][`${category}Store`].concat(
            this.state[category][`${category}Input`]
          ),
          [`${category}Preview`]: !this.state[category][`${category}Preview`],
        },
      });
    }, 100);
  };

  //onSubmit function to update the stored state of the given section with a unique ID//

  submitInputState = (e, category) => {
    e.preventDefault();
    this.generateId(category);
    setTimeout(this.storeCategoryState(category), 100);

    return;
  };

  render() {
    const {
      personalDetails,
      profile,
      employmentHistory,
      skills,
      education,
    } = this.state;
    const submitInputState = this.submitInputState;
    const updateInputState = this.updateInputState;

    return (
      <>
        <Header />

        <PersonalDetails
          updateInputState={updateInputState}
          submitInputState={submitInputState}
          personalDetails={personalDetails}
        />

        <Profile
          updateInputState={updateInputState}
          submitInputState={submitInputState}
          profile={profile}
        />
        <EmploymentHistory
          updateInputState={updateInputState}
          submitInputState={submitInputState}
          employmentHistory={employmentHistory}
        />
        <Skills
          updateInputState={updateInputState}
          submitInputState={submitInputState}
          skills={skills}
        />
        <Education
          updateInputState={updateInputState}
          submitInputState={submitInputState}
          education={education}
        />
      </>
    );
  }
}
