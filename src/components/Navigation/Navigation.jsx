import React from 'react';
import Sidebar from './Sidebar';
import { Logo } from '../index.js';
import './nav.scss';
const Navigation = () => {
  return (
    <div>
      <Sidebar />
      <Logo />
    </div>
  );
};

export default Navigation;
