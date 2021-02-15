import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//? COMPONENTS
import Pages from './components/Services/Pages/Pages';
import Cosmetic from './components/Services/Cosmetic/Cosmetic';
import { Navigation } from './components';
import { Home, About, Contact } from './pages';

//import Header from './components/Header/Header';
//import Footer from './components/Footer/Footer';
//? STYLES

import './scss/style.scss';

function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('#ffffff');
  return (
    <>
      <div className='sweet-loading'>
        <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
        <input
          value={color}
          onChange={(input) => setColor(input.target.value)}
          placeholder='Color of the loader'
        />
      </div>
      <Router>
        <Navigation />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/pages' component={Pages} />
          <Route path='/Cosmetic' component={Cosmetic} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
