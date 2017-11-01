import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <div className='overlay'>
          <div className='title'>
            <h1>Front-end Engineer</h1>
            <h2>REACT | REDUX | ANDROID</h2>
          </div>
          <div className='button-container'>
            <button className='button'>ABOUT ME</button>
            <button className='button'>VIEW MY WORK</button>
          </div>
        </div>
      </div>
    );
  }
}