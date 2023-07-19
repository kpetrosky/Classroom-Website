import React from 'react';
import title from '../../src/components/images/title image.png';

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="App-header">
      <img src={title} className="App-title" alt="title" />
      <div className="header-container">
        <ul className="nav nav-tabs">
          {/* Grade Level Tabs */}
          <li className="nav-item">
            <a
              href="#Kinder"
              onClick={() => handlePageChange('Kinder')}
              className={currentPage === 'Kinder' ? 'nav-link active' : 'nav-link'}
            >
              Kinder
            </a>
            {currentPage === 'Kinder' && (
              <ul className="sub-links">
                <li>
                  <a href="#teacher1" onClick={() => handlePageChange('teacher1')}>
                    Teacher 1
                  </a>
                </li>
                <li>
                  <a href="#teacher2" onClick={() => handlePageChange('teacher2')}>
                    Teacher 2
                  </a>
                </li>
                <li>
                  <a href="#teacher3" onClick={() => handlePageChange('teacher3')}>
                    Teacher 3
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <a
              href="#1st"
              onClick={() => handlePageChange('1st')}
              className={currentPage === '1st' ? 'nav-link active' : 'nav-link'}
            >
              1st
            </a>
            {currentPage === '1st' && (
              <ul className="sub-links">
                <li>
                  <a href="#teacher4" onClick={() => handlePageChange('teacher4')}>
                    Teacher 4
                  </a>
                </li>
                <li>
                  <a href="#teacher5" onClick={() => handlePageChange('teacher5')}>
                    Teacher 5
                  </a>
                </li>
                <li>
                  <a href="#teacher6" onClick={() => handlePageChange('teacher6')}>
                    Teacher 6
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <a
              href="#2nd"
              onClick={() => handlePageChange('2nd')}
              className={currentPage === '2nd' ? 'nav-link active' : 'nav-link'}
            >
              2nd
            </a>
            {currentPage === '2nd' && (
              <ul className="sub-links">
                <li>
                  <a href="#teacher7" onClick={() => handlePageChange('teacher7')}>
                    Teacher 7
                  </a>
                </li>
                <li>
                  <a href="#teacher8" onClick={() => handlePageChange('teacher8')}>
                    Teacher 8
                  </a>
                </li>
                <li>
                  <a href="#teacher9" onClick={() => handlePageChange('teacher9')}>
                    Teacher 9
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <a
              href="#3rd"
              onClick={() => handlePageChange('3rd')}
              className={currentPage === '3rd' ? 'nav-link active' : 'nav-link'}
            >
              3rd
            </a>
            {/* Add sub-links for 3rd grade */}
            {currentPage === '3rd' && (
              <ul className="sub-links">
                <li>
                  <a href="#teacher10" onClick={() => handlePageChange('teacher10')}>
                    Teacher 10
                  </a>
                </li>
                <li>
                  <a href="#teacher11" onClick={() => handlePageChange('teacher11')}>
                    Teacher 11
                  </a>
                </li>
                {/* Add more sub-links for 3rd grade */}
              </ul>
            )}
          </li>
          <li className="nav-item">
            <a
              href="#4th"
              onClick={() => handlePageChange('4th')}
              className={currentPage === '4th' ? 'nav-link active' : 'nav-link'}
            >
              4th
            </a>
            {/* Add sub-links for 4th grade */}
            {currentPage === '4th' && (
              <ul className="sub-links">
                <li>
                  <a href="#teacher12" onClick={() => handlePageChange('teacher12')}>
                    Teacher 12
                  </a>
                </li>
                <li>
                  <a href="#teacher13" onClick={() => handlePageChange('teacher13')}>
                    Teacher 13
                  </a>
                </li>
                {/* Add more sub-links for 4th grade */}
              </ul>
            )}
          </li>
          <li className="nav-item">
            <a
              href="#5th"
              onClick={() => handlePageChange('5th')}
              className={currentPage === '5th' ? 'nav-link active' : 'nav-link'}
            >
              5th
            </a>
            {/* Add sub-links for 5th grade */}
            {currentPage === '5th' && (
              <ul className="sub-links">
                <li>
                  <a href="#teacher14" onClick={() => handlePageChange('teacher14')}>
                    Teacher 14
                  </a>
                </li>
                <li>
                  <a href="#teacher15" onClick={() => handlePageChange('teacher15')}>
                    Teacher 15
                  </a>
                </li>
                {/* Add more sub-links for 5th grade */}
              </ul>
            )}
          </li>
          <li className="nav-item">
            <a
              href="#6th"
              onClick={() => handlePageChange('6th')}
              className={currentPage === '6th' ? 'nav-link active' : 'nav-link'}
            >
              6th
            </a>
            {/* Add sub-links for 6th grade */}
            {currentPage === '6th' && (
              <ul className="sub-links">
                <li>
                  <a href="#teacher16" onClick={() => handlePageChange('teacher16')}>
                    Teacher 16
                  </a>
                </li>
                <li>
                  <a href="#teacher17" onClick={() => handlePageChange('teacher17')}>
                    Teacher 17
                  </a>
                </li>
                {/* Add more sub-links for 6th grade */}
              </ul>
            )}
          </li>
          <li className="nav-item">
            <a
              href="#7th"
              onClick={() => handlePageChange('7th')}
              className={currentPage === '7th' ? 'nav-link active' : 'nav-link'}
            >
              7th
            </a>
            {/* Add sub-links for 7th grade */}
            {currentPage === '7th' && (
              <ul className="sub-links">
                <li>
                  <a href="#teacher18" onClick={() => handlePageChange('teacher18')}>
                    Teacher 18
                  </a>
                </li>
                <li>
                  <a href="#teacher19" onClick={() => handlePageChange('teacher19')}>
                    Teacher 19
                  </a>
                </li>
                {/* Add more sub-links for 7th grade */}
              </ul>
            )}
          </li>
          <li className="nav-item">
            <a
              href="#8th"
              onClick={() => handlePageChange('8th')}
              className={currentPage === '8th' ? 'nav-link active' : 'nav-link'}
            >
              8th
            </a>
            {/* Add sub-links for 8th grade */}
            {currentPage === '8th' && (
              <ul className="sub-links">
                <li>
                  <a href="#teacher20" onClick={() => handlePageChange('teacher20')}>
                    Teacher 20
                  </a>
                </li>
                <li>
                  <a href="#teacher21" onClick={() => handlePageChange('teacher21')}>
                    Teacher 21
                  </a>
                </li>
                {/* Add more sub-links for 8th grade */}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
