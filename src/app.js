// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Announcements from '../src/components/Announcements';
import Assignments from '../src/components/Assignments';
import Resources from '../src/components/Resources';
import Footer from '../src/components/Footer';

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
