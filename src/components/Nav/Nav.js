import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../../img/icons/menu-button-white.png';
import './Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <div className='Nav'>
        <div className='mobile-nav center-vertical'>
          <img className='menu-icon' src={menuIcon} alt='menu icon' />
          <h4 className='center'><Link to='/'>SHEENA DO</Link></h4>
        </div>
        <div className='navbar'>
          <div className='navbar-contents center-vertical'>
            <div className='logo'>
              <h4><Link to='/'>SHEENA DO</Link></h4>
            </div>
            <div className='navbar-items'>
              <h4><Link to='/'>ABOUT ME</Link></h4>
              <h4><Link to='/portfolio'>PORTFOLIO</Link></h4>
              <h4><Link to='/contact'>CONTACT</Link></h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
