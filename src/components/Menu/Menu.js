import React, { Component } from 'react';
import './Menu.css';

export default class Menu extends Component {
  selectMenu = (id) => {
    this.props.scrollTo(id);
    this.props.toggleMenu();
  }
  render() {
    const { showMenu } = this.props;
    return (
      <div className='Menu'>
        <div className={`divider ${showMenu ? 'show-divider' : ''}`} />
        <h4 className={`menu-item ${showMenu ? 'show-item' : ''}`}
          onClick={() => this.selectMenu('About')}>
          ABOUT
        </h4>
        <div className={`divider ${showMenu ? 'show-divider' : ''}`} />
        <h4 className={`menu-item ${showMenu ? 'show-item' : ''}`}
          onClick={() => this.selectMenu('Portfolio')}>
          PORTFOLIO
        </h4>
        <div className={`divider ${showMenu ? 'show-divider' : ''}`} />
        <h4 className={`menu-item ${showMenu ? 'show-item' : ''}`}
          onClick={() => this.selectMenu('Contact')}>
          CONTACT
        </h4>
        <div className={`divider ${showMenu ? 'show-divider' : ''}`} />
      </div>
    );
  }
}
