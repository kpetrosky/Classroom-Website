<<<<<<< HEAD
=======
// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Announcements from '../src/components/Announcements';
import Assignments from '../src/components/Assignments';
import Resources from '../src/components/Resources';
import Footer from '../src/components/Footer';
import navTabs from '../src/components/navTabs'

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
>>>>>>> parent of 9e82ce0 (trying to get the navtabsto work- bnot working at this time)
