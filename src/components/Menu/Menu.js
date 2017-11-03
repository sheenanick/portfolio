import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import me from '../../img/icons/me.png';
import portfolio from '../../img/icons/portfolio.png';
import contact from '../../img/icons/contact.png';
import './Menu.css';

export default class Menu extends Component {
  render() {
    return (
      <div>
        <div className='Menu'>
          <Link to='/'>
            <div className='menu-title'>
              <h2>Sheena Do</h2>
            </div>
          </Link>
          <div className='divider'/>
          <Link to='/'>
            <div className='menu-item'>
              <img className='menu-item-icon' src={me} alt='About me icon' />
              <h4>ABOUT ME</h4>
            </div>
          </Link>
          <div className='divider'/>
          <Link to='/portfolio'>
            <div className='menu-item'>
              <img className='menu-item-icon' src={portfolio} alt='About me icon' />
              <h4>PORTFOLIO</h4>
            </div>
          </Link>
          <div className='divider'/>
          <Link to='/contact'>
            <div className='menu-item'>
              <img className='menu-item-icon' src={contact} alt='Contact icon' />
              <h4>CONTACT</h4>
            </div>
          </Link>
          <div className='divider'/>
        </div>
      </div>
    );
  }
}
