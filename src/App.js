import React, { Component } from 'react';
import Header from './components/pages/Header';
import Announcements from './components/pages/Announcements';
import Assignments from './components/pages/Assignments';
import Resources from './components/pages/Resources';
// import TeacherClassroom from './components/pages/teacherClassroom';
import TeacherPages from './components/pages/TeacherPages';
import CurriculumPlanner from './components/pages/CurriculumPlanner';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'announcements'
    };
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { currentPage } = this.state;

    return (
      <div className="App">
        <Header currentPage={currentPage} handlePageChange={this.handlePageChange} />
        <main className="App-content">
          {currentPage === 'announcements' && <Announcements />}
          {currentPage === 'assignments' && <Assignments />}
          {currentPage === 'resources' && <Resources />}
          {currentPage === 'teacherPages' && <TeacherPages />}
          {currentPage === 'CurriculumPlanner' && <CurriculumPlanner />} {/* Render the CurriculumPlanner component */}
        </main>
        <footer>{/* Footer content goes here */}</footer>
      </div>
    );
  }
}

export default App;
