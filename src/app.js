import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Announcements from '../src/components/Announcements';
import Assignments from '../src/components/Assignments';
import Resources from '../src/components/Resources';
import Footer from '../src/components/Footer';
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
