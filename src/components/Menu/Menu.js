import React, { Component } from 'react';
import classNames from 'classnames';
import close from '../../img/icons/close.png';
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
        const wrapperClass = classNames('menu-item-wrapper', { 'show-item': showMenu });
        const itemClass = classNames('menu-item', { 'underline': active === id });
        return (
          <div className={wrapperClass} key={key}>
            <h4 className={itemClass}
              onClick={() => this.selectMenu(id)}>
              {label.toUpperCase()}
            </h4>
          </div>
        );
      })
    );
  }

  render() {
    const { showMenu, toggleMenu } = this.props;
    const menuClass = classNames('Menu', { 'show-menu': showMenu });
    return (
      <div className={menuClass}>
        <img className='menu-icon gradient' src={close} alt='close icon' onClick={toggleMenu} />
        <div className='mobile-menu'>
          {this.renderMenuItems()}
        </div>
      </div>
    );
  }
}
