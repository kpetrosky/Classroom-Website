/* Header.js */
import React from 'react';
import title from '../../src/images/title image.png';

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="App-header">
      <img src={title} className="App-title" alt="title" />
      {/* Rest of the header content */}
      {/* <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#Kinder-1"
            onClick={() => handlePageChange('Kinder-1')}
            className={currentPage === 'Kinder-1' ? 'nav-link active' : 'nav-link'}
            style={{ fontSize: '32px' }} // Increase the font size to 32px
          >
            Kinder-1
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            style={{ fontSize: '32px' }} // Increase the font size to 32px
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#websites"
            onClick={() => handlePageChange('websites')}
            className={currentPage === 'websites' ? 'nav-link active' : 'nav-link'}
            style={{ fontSize: '32px' }} // Increase the font size to 32px
          >
            Websites
          </a>
        </li>
      </ul> */}
    </header>
  );
}

export default Header;
