import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Announcements from './components/Announcements';
import Assignments from './components/Assignments';
import Resources from './components/Resources';
import Footer from './components/Footer';
import NavTabs from './components/navTabs';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <NavTabs />
        <main>
          <Route path="/announcements" component={Announcements} />
          <Route path="/assignments" component={Assignments} />
          <Route path="/resources" component={Resources} />
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

