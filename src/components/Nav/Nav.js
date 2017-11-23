import React, { Component } from 'react';
import { MENU } from '../../util/constants';
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
    const { scrollTo, active } = this.props;
    return (
      <div className={`Nav ${active !== 'Home' ? 'fixed-nav' : ''}`}>
        <div className='nav-contents center-vertical'>
          <div className='logo'>
            <h4 className='nav-logo' onClick={() => scrollTo('Home')}>SHEENA DO</h4>
          </div>
          <div className='nav-item-wrapper'>
            {this.renderNavItems()}
          </div>
        </div>
      </div>
    );
  }
}
