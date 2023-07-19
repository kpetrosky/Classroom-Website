/* Header.js */
import React from 'react';
import title from '../../src/images/title-image.png'
 // Replace 'logo.png' with your image file name and path

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="App-header">
      <img src={title} className="App-logo" alt="Logo" />
      {/* Rest of the header content */}
    </header>
  );
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          style={{ fontSize: '32px' }} // Increase the font size to 24px
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          style={{ fontSize: '32px' }} // Increase the font size to 24px
        >
          Portfolio
        </a>
        <li className="nav-item">
        <a
          href="#websites"
          onClick={() => handlePageChange('websites')}
          className={currentPage === 'websites' ? 'nav-link active' : 'nav-link'}
          style={{ fontSize: '32px' }} // Increase the font size to 24px
        >
          websites
        </a>
      </li>
      </li>
      <li className="nav-item">
        <a
          href="#websites"
          onClick={() => handlePageChange('websites')}
          className={currentPage === 'websites' ? 'nav-link active' : 'nav-link'}
          style={{ fontSize: '32px' }} // Increase the font size to 24px
        >
          websites
        </a>
      </li>
     
    </ul>
  );
}

export default Header;

