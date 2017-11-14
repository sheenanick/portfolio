import React, { Component } from 'react';
import menuIcon from '../../img/icons/menu-button-white.png';
import './Nav.css';

export default class Nav extends Component {
  render() {
    const { scrollTo } = this.props;
    return (
      <div className='Nav'>
        <div className='mobile-nav center-vertical'>
          <img className='menu-icon' src={menuIcon} alt='menu icon' />
          <h4 className='center' onClick={() => scrollTo('Home')}>SHEENA DO</h4>
        </div>
        <div className='navbar'>
          <div className='navbar-contents center-vertical'>
            <div className='logo'>
              <h4 onClick={() => scrollTo('Home')}>SHEENA DO</h4>
            </div>
            <div className='navbar-items'>
              <h4 onClick={() => scrollTo('Home')}>HOME</h4>
              <h4 onClick={() => scrollTo('Portfolio')}>PORTFOLIO</h4>
              <h4 onClick={() => scrollTo('Contact')}>CONTACT</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
