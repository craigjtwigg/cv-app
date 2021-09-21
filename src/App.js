import './styles/App.css';
import Header from './components/Header';
import PersonalDetails from './components/PersonalDetails';
import Profile from './components/Profiile';
import Skills from './components/Skills';
import Education from './components/Education';
import EmploymentHistory from './components/EmploymentHistory';
import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      //state//
    }

  }
  render() {
    return (
    <>
    <Header />
    <PersonalDetails />
    <Profile />
    <EmploymentHistory />
    <Skills />
    <Education />
    </>
    )
  }
}