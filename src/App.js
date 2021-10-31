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
          key: '',
          isInitialInput: true,
        },
        personalDetailsStore: [],
        personalDetailsPreview: false,
      },
      profile: {
        profileInput: {
          profile: '',
          key: uuidv4(),
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
          key: uuidv4(),
          isInitialInput: true,
        },
        employmentHistoryStore: [],
        employmentHistoryPreview: false,
        employmentHistoryAddMoreMode: false,
        employmentHistoryCount: 1,
      },
      skills: {
        skillsInput: {
          skill: '',
          key: uuidv4(),
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
          key: uuidv4(),
          isInitialInput: true,
        },
        educationStore: [],
        educationPreview: false,
        educationAddMoreMode: false,
      },
    };

    this.updateInputState = this.updateInputState.bind(this);
    this.submitInputState = this.submitInputState.bind(this);
    this.generateId = this.generateId.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.returnState = this.returnState.bind(this);
    this.toggleAddMore = this.toggleAddMore.bind(this);
  }

  returnState = (category, type) => {
    return this.state[category][`${category}${type}`];
  };

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
        [`${category}Count`]: this.state[category][`${category}Count`],
        [`${category}AddMoreMode`]: this.state[category][`${category}AddMoreMode`],
      },
    });
  };

  //method to toggle between input and preview modes//

  toggleView = (category) => {
    this.setState({
      ...this.state,
      [category]: {
        [`${category}Store`]: {
          ...this.state[category][`${category}Store`],
        },
        [`${category}Input`]: {
          ...this.state[category][`${category}Input`],
        },
        [`${category}Preview`]: !this.state[category][`${category}Preview`],
        [`${category}Count`]: this.state[category][`${category}Count`],
        [`${category}AddMoreMode`]: this.state[category][`${category}AddMoreMode`],
      },
    });
  };

  toggleInitial = (category) => {
    this.setState({
      ...this.state,
      [category]: {
        [`${category}Input`]: {
          ...this.state[category][`${category}Input`],
          isInitialInput: false,
          key: uuidv4(),
        },
        [`${category}Store`]: this.state[category][`${category}Store`],

        [`${category}Preview`]: this.state[category][`${category}Preview`],
        [`${category}Count`]: this.state[category][`${category}Count`],
        [`${category}AddMoreMode`]: this.state[category][`${category}AddMoreMode`],
      },
    });
  };

  toggleAddMore = (category) => {
        this.setState({
      ...this.state,
      [category]: {
        [`${category}Store`]: {
          ...this.state[category][`${category}Store`],
        },
        [`${category}Input`]: {
          ...this.state[category][`${category}Input`],
        },
        [`${category}Preview`]: this.state[category][`${category}Preview`],
        [`${category}Count`]: this.state[category][`${category}Count`],
        [`${category}AddMoreMode`]: !this.state[category][`${category}AddMoreMode`],
      },
    });
  }

  //uuid used to asign a unique ID//

  generateId = (category) => {
    this.setState({
      ...this.setState,
      [category]: {
        [`${category}Input`]: {
          ...this.state[category][`${category}Input`],
          key: uuidv4(),
        },
        [`${category}Store`]: this.state[category][`${category}Store`],
        [`${category}Preview`]: this.state[category][`${category}Preview`],
        [`${category}Count`]: this.state[category][`${category}Count`],
        [`${category}AddMoreMode`]: this.state[category][`${category}AddMoreMode`],
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
          [`${category}Count`]: this.state[category][`${category}Count`],
          [`${category}AddMoreMode`]: this.state[category][`${category}AddMoreMode`],
        },
      });
    }, 100);
  };

  submitEdit = (category, key) => {
    setTimeout(() => {
      this.setState({
        ...this.state,
        [category]: {
          [`${category}Input`]: {
            ...this.state[category][`${category}Input`],
          },
          [`${category}Store`]: [this.state[category][`${category}Input`]],
          [`${category}Preview`]: !this.state[category][`${category}Preview`],
          [`${category}Count`]: this.state[category][`${category}Count`],
          [`${category}AddMoreMode`]: this.state[category][`${category}AddMoreMode`],
        },
      });
    }, 100);
    console.log(key);
  };

  //onSubmit function to update the stored state of the given section with a unique ID//

  submitInputState = (e, category, key) => {
    e.preventDefault();

    if (this.state[category][`${category}Input`].isInitialInput) {
      setTimeout(this.storeCategoryState(category), 100);
      setTimeout(this.toggleInitial(category), 100);
      // setTimeout(this.generateId(category), 100);
      console.log(key);
    } else {
      this.submitEdit(category, key);
      setTimeout(this.generateId(category), 100);
    }
    return;
  };

  render() {
    const { personalDetails, profile, employmentHistory, skills, education } =
      this.state;
    const submitInputState = this.submitInputState;
    const updateInputState = this.updateInputState;
    const toggleView = this.toggleView;
    const toggleAddMore = this.toggleAddMore

    return (
      <>
        <Header />

        <PersonalDetails
          updateInputState={updateInputState}
          submitInputState={submitInputState}
          toggleView={toggleView}
          personalDetails={personalDetails}
        />

        <Profile
          updateInputState={updateInputState}
          submitInputState={submitInputState}
          toggleView={toggleView}
          profile={profile}
        />
        <EmploymentHistory
          updateInputState={updateInputState}
          submitInputState={submitInputState}
          toggleView={toggleView}
          employmentHistory={employmentHistory}
          toggleAddMore={toggleAddMore}
        />
        <Skills
          updateInputState={updateInputState}
          submitInputState={submitInputState}
          toggleView={toggleView}
          skills={skills}
        />
        <Education
          updateInputState={updateInputState}
          submitInputState={submitInputState}
          toggleView={toggleView}
          education={education}
          toggleAddMore={toggleAddMore}
        />
      </>
    );
  }
}
