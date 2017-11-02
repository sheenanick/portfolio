import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import profile from '../../img/sheena.jpeg';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <div className='overlay'>
          <div className='title'>
            <img className='profile-img' src={profile} alt='Sheena' />
            <h1>Front-End Engineer</h1>
            <h2>REACT | REDUX | ANDROID</h2>
          </div>
          <Link to='/portfolio'><button className='button'>VIEW MY WORK</button></Link>
        </div>
      </div>
    );
  }
}
