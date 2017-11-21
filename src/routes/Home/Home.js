import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div id='Home'>
        <div className='overlay'>
          <div className='title'>
            <h1>HELLO, MY NAME IS <span className='home-name'>SHEENA DO</span>.</h1>
            <h2>I'm a front-end developer.</h2>
          </div>
          <button className='button button-transparent' onClick={() => this.props.scrollTo('About')}>LEARN MORE</button>
        </div>
      </div>
    );
  }
}
