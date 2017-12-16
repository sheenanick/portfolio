import React, { Component } from 'react';
import classNames from 'classnames';
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
        const navClass = classNames('nav-title', 'nav-item', { 'active': active === id });
        return (
          <h4 key={key}
            className={navClass}
            onClick={() => scrollTo(id)}>
            {label.toUpperCase()}
          </h4>
        );
      })
    );
  }

  render() {
    const { active, toggleMenu } = this.props;
    const home = active === 'Home';
    const iconClass = classNames('menu-icon', 'gradient', { 'dark': !home });
    const navClass = classNames('navbar', { 'fixed-nav': !home });
    return (
      <div className='Nav'>
        <div className='mobile-nav'>
          <img className={iconClass} src={`${home ? menuWhite : menuDark}`} alt='menu icon' onClick={toggleMenu} />
        </div>
        <div className={navClass}>
          <div className='nav-contents center-vertical'>
            {this.renderNavItems()}
          </div>
        </div>
      </div>
    );
  }
}
