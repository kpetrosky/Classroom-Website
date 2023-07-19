import React, { useState } from 'react';
import '../src/components/App.js';
import Header from './components/Header.js';
import Announcements from './components/Announcements.js';
import Assignments from './components/Assignments.js';
import Resources from './components/Resources.js';
import Footer from './components/Footer.js';
// import NavTabs from './components/NavTabs'; // Import the NavTabs component

function App() {
  const [currentPage, setCurrentPage] = useState('Kinder'); // Set the initial current page

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Header />
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        {currentPage === 'Kinder' && <Announcements />}
        {currentPage === '1st' && <Assignments />}
        {currentPage === '2nd' && <Resources />}
        {/* Add more components/content for other pages based on currentPage */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
