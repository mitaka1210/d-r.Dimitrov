import React, { useState, useRef } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Link, Switch } from 'react-router-dom';
import './nav.scss';
import SubMenu from './SubMenu/SubMenu';
export default class Sidebar extends React.Component {
  state = {
    menuOpen: false,
  };

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <Menu
        right
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}>
        <Link onClick={() => this.closeMenu()} className='menu-item' to='/'>
          Начало
        </Link>
        <Link onClick={() => this.closeMenu()} className='menu-item' to='/about'>
          За мен
          {/*<SubMenu />*/}
        </Link>

        <Link onClick={() => this.closeMenu()} className='menu-item' to='/services'>
          Услуги
        </Link>
        <Link onClick={() => this.closeMenu()} className='menu-item' to='/contact'>
          Контакти
        </Link>
      </Menu>
    );
  }
}

//const Sidebar = () => {
//  const [open, setOpen] = useState(false);
//  const node = useRef;

//  const close = () => setOpen(false);
//  useOnClickOutside(node, () => setOpen(false));
//  return (
//    <Menu right open={open} onClick={() => setOpen(!open)}>
//      <Link onClick={() => close()} className='menu-item' to='/home'>
//        Home
//      </Link>
//      <Link onClick={() => close()} className='menu-item' to='/about'>
//        About
//      </Link>
//      <Link onClick={() => close()} className='menu-item' to='/contact'>
//        Contact
//      </Link>
//    </Menu>
//  );
//};

//export default Sidebar;
