import React, { Component } from 'react';
import { MENU } from '../../util/constants';
import menuWhite from '../../img/icons/menu-button-white.png';
import menuDark from '../../img/icons/menu-button-black.png';
import './Nav.css';

export default class Nav extends Component {
  renderNavItems = () => {
    const { active, scrollTo } = this.props;
    return (
      Object.keys(MENU).map((key) => {
        const item = MENU[key];
        const { id, label } = item;
        return (
          <h4 key={key}
            className={`nav-title nav-item ${active === id ? 'active' : ''}`}
            onClick={() => scrollTo(id)}>
            {label.toUpperCase()}
          </h4>
        );
      })
    );
  }

  render() {
    const { active, toggleMenu } = this.props;
    return (
      <div className='Nav'>
        <div className='mobile-nav'>
          {
            active === 'Home' ?
              <img className='menu-icon gradient' src={menuWhite} alt='menu icon' onClick={toggleMenu} />
            :
              <img className='menu-icon dark gradient' src={menuDark} alt='menu icon' onClick={toggleMenu} />
          }
        </div>
      <div className={`navbar ${active !== 'Home' ? 'fixed-nav' : ''}`}>
        <div className='nav-contents center-vertical'>
          {this.renderNavItems()}
        </div>
      </div>
      </div>
    );
  }
}
