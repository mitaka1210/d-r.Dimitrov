import React from 'react';
import './submenu.scss';
const SubMenu = () => {
  return (
    <div>
      <ul className='nav__submenu'>
        <li className='nav__submenu-item'>Spec</li>
        <li className='nav__submenu-item'>Who</li>
        <li className='nav__submenu-item'>What</li>
        <li className='nav__submenu-item'>Where</li>
      </ul>
    </div>
  );
};

export default SubMenu;
