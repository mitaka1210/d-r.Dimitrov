import React from 'react';
import Sidebar from './Sidebar';
import { Logo } from '../index.js';
import './nav.scss';
const Navigation = () => {
  return (
    <>
      <Sidebar />
      <Logo />
    </>
  );
};

export default Navigation;
