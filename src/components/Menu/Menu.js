import React, { Component } from 'react';
import { MENU } from '../../util/constants';
import './Menu.css';

export default class Menu extends Component {
  selectMenu = (id) => {
    this.props.scrollTo(id);
    this.props.toggleMenu();
  }
  renderMenuItems = () => {
    const { showMenu } = this.props;
    return (
      Object.keys(MENU).map((key) => (
        <div key={key}>
          <h4 className={`menu-item ${showMenu ? 'show-item' : ''}`}
            onClick={() => this.selectMenu(MENU[key]['id'])}>
            {MENU[key]['label'].toUpperCase()}
          </h4>
          <div className={`divider ${showMenu ? 'show-divider' : ''}`} />
        </div>
      ))
    );
  }
  render() {
    const { showMenu } = this.props;
    return (
      <div className='Menu'>
        <div className={`divider ${showMenu ? 'show-divider' : ''}`} />
        {this.renderMenuItems()}
      </div>
    );
  }
}
