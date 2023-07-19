/* Header.js */
import React from 'react';
import title from '../../src/components/images/title image.png';

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="App-header">
      <img src={title} className="App-title" alt="title" />
      <div className="header-container">
        <ul className="nav nav-tabs">
          {/* Kinder Tabs */}
          <li className="nav-item">
            <a
              href="#Kinder"
              onClick={() => handlePageChange('Kinder')}
              className={currentPage === 'Kinder' ? 'nav-link active' : 'nav-link'}
            >
              Kinder
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#1st"
              onClick={() => handlePageChange('1st')}
              className={currentPage === '1st' ? 'nav-link active' : 'nav-link'}
            >
              1st
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#2nd"
              onClick={() => handlePageChange('2nd')}
              className={currentPage === '2nd' ? 'nav-link active' : 'nav-link'}
            >
              2nd
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#3rd"
              onClick={() => handlePageChange('3rd')}
              className={currentPage === '3rd' ? 'nav-link active' : 'nav-link'}
            >
              3rd
            </a>
          </li>  <li className="nav-item">
            <a
              href="#4th"
              onClick={() => handlePageChange('4th')}
              className={currentPage === '4th' ? 'nav-link active' : 'nav-link'}
            >
              4th
            </a>
          </li>  <li className="nav-item">
            <a
              href="#5th"
              onClick={() => handlePageChange('5th')}
              className={currentPage === '5th' ? 'nav-link active' : 'nav-link'}
            >
              5th
            </a>
          </li>  <li className="nav-item">
            <a
              href="#6th"
              onClick={() => handlePageChange('6th')}
              className={currentPage === '6th' ? 'nav-link active' : 'nav-link'}
            >
              6th
            </a>
          </li>  <li className="nav-item">
            <a
              href="#7th"
              onClick={() => handlePageChange('7th')}
              className={currentPage === '7th' ? 'nav-link active' : 'nav-link'}
            >
              7th
            </a>
          </li>  <li className="nav-item">
            <a
              href="#8th"
              onClick={() => handlePageChange('8th')}
              className={currentPage === '8th' ? 'nav-link active' : 'nav-link'}
            >
              8th
            </a>
          </li>
       
        </ul>
      </div>
    </header>
  );
}

export default Header;
