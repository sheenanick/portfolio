import React, { Component } from 'react';
import profile from '../../img/home/sheena.jpeg';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div id='Home'>
        <div className='overlay'>
          <div className='title'>
            <img className='profile-img' src={profile} alt='Sheena' />
            <h1>Front-End Developer</h1>
            <h2>REACT | REDUX | ANDROID</h2>
          </div>
        </div>
      </div>
    );
  }
}
