import React from 'react';

import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
//? COMPONENTS
import Pages from './components/Services/Pages/Pages';
import Messages from './components/AlertMessages/Messages';
import Cosmetic from './components/Services/Cosmetic/Cosmetic';
import COVID from './components/COVID/Message';
import { Navigation } from './components';
import { Home, About, Contact, Services } from './pages';
import ScrollToTop from './components/ScrollTop/ScrollToTop';

//? STYLES

import './scss/style.scss';

function App() {
  return (
    <>
      <Messages
        variant='WHO I AM'
        children=' 

        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      />

      <Router>
        <ScrollToTop />
        <Navigation />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/services' component={Services} />
          <Route path='/pages' component={Pages} />
          <Route path='/cosmetic' component={Cosmetic} />
          <Route path='/covid' component={COVID} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
