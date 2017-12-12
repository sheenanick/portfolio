import React, { Component } from 'react';
import logo from '../../img/icons/logo.png';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div id='Home'>
        <div className='overlay'>
          <img className='home-logo' src={logo} alt='logo' />
          <h4 className='home-subtitle'>Front End Developer</h4>
          <h1 className='home-title'>SHEENA DO</h1>
          <button className='button button-transparent' onClick={() => this.props.scrollTo('About')}>LEARN MORE</button>
        </div>
      </div>
    );
  }
}
