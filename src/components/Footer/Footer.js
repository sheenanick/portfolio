import React, { Component } from 'react';
import github from '../../img/icons/github-icon.png';
import linkedin from '../../img/icons/linkedin-icon.png';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
        <div className='footer-container'>
          <p className='copyright'>&copy; 2017 Sheena Do</p>
          <div className='footer-icon-container'>
            <a href='https://github.com/sheenanick' target='_blank' rel='noopener noreferrer'>
              <img className='footer-icon' src={github} alt='github'/>
            </a>
            <a href='https://www.linkedin.com/in/sheenado/' target='_blank' rel='noopener noreferrer'>
              <img className='footer-icon' src={linkedin} alt='linkedin'/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
