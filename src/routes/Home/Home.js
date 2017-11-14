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
            <h1>Front-End Engineer</h1>
            <h2>REACT | REDUX | ANDROID</h2>
          </div>
          <button className='button' onClick={() => this.props.scrollTo('Portfolio')}>VIEW MY WORK</button>
        </div>
      </div>
    );
  }
}
