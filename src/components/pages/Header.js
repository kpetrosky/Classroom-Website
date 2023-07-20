import React from 'react';
import CurriculumPlanner from "./CurriculumPlanner";

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <header className="App-header">
      <img src={logo} alt="Logo" /> {/* Add the image with the appropriate path */}
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#announcements"
              onClick={() => handlePageChange('announcements')}
              className={currentPage === 'announcements' ? 'nav-link active' : 'nav-link'}
            >
              🧡Announcements
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#assignments"
              onClick={() => handlePageChange('assignments')}
              className={currentPage === 'assignments' ? 'nav-link active' : 'nav-link'}
            >
              🧐Assignments
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resources"
              onClick={() => handlePageChange('resources')}
              className={currentPage === 'resources' ? 'nav-link active' : 'nav-link'}
            >
              🐶Resources
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#teacherPages"
              onClick={() => handlePageChange('teacherPages')}
              className={currentPage === 'teacherPages' ? 'nav-link active' : 'nav-link'}
            >
              🍉Teacher Pages
            </a>
          </li>
          {/* New navtab for Curriculum/Year Planner */}
           <li className="nav-item">
            <a
              href="#curriculum"
              onClick={() => handlePageChange('CurriculumPlanner')}
              className={currentPage === 'CurriculumPlanner' ? 'nav-link active' : 'nav-link'}
            >
              🌞 Curriculum/Year Planner
            </a>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
