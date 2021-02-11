import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Navigation } from './components';
import { Home, About, Contact } from './pages';

//import Header from './components/Header/Header';
//import Footer from './components/Footer/Footer';

import './scss/style.scss';

function App() {
  return (
    <Router>
      <Navigation />

      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
    </Router>
  );
}

export default App;
