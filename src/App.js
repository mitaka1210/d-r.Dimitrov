import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Navigation } from './components';
import { Home, About, Contact } from './pages';

//import Header from './components/Header/Header';
//import Footer from './components/Footer/Footer';

import './App.scss';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation />

        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </div>
    </Router>
  );
}

export default App;
