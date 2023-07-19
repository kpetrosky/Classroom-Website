// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Announcements from './components/Announcements';
import Assignments from './components/Assignments';
import Resources from './components/Resources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Announcements />
        <Assignments />
        <Resources />
      </main>
      <Footer />
    </div>
  );
}

export default App;
