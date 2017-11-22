import React, { Component } from 'react';
import menuIcon from '../../img/icons/menu-button-white.png';
import { MENU } from '../../util/constants';
import './Menu.css';

export default class Menu extends Component {
  onHomeClick = () => {
    const { scrollTo, showMenu, toggleMenu } = this.props;
    scrollTo('Home');
    if (showMenu) toggleMenu();
  }

  selectMenu = (id) => {
    const { scrollTo, toggleMenu } = this.props;
    scrollTo(id);
    toggleMenu();
  }

  renderMenuItems = () => {
    const { showMenu, active } = this.props;
    return (
      Object.keys(MENU).map((key) => {
        const item = MENU[key];
        const { id, label } = item;
        return (
          <div key={key}>
            <h4 className={`menu-item ${showMenu ? 'show-item' : ''} ${active === id ? 'accent' : ''}`}
              onClick={() => this.selectMenu(id)}>
              {label.toUpperCase()}
            </h4>
            <div className={`divider ${showMenu ? 'show-divider' : ''}`} />
          </div>
        );
      })
    );
  }

  render() {
    const { showMenu, toggleMenu } = this.props;
    return (
      <div className='Menu'>
        <div className='mobile-nav center-vertical'>
          <img className='menu-icon' src={menuIcon} alt='menu icon' onClick={toggleMenu} />
          <h4 className='nav-title center' onClick={this.onHomeClick}>SHEENA DO</h4>
        </div>
        <div className={`divider ${showMenu ? 'show-divider' : ''}`} />
        {this.renderMenuItems()}
      </div>
    );
  }
}
