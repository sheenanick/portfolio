import React, { Component } from 'react';
import logo from '../../img/icons/code.png';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div id='Home'>
        <div className='overlay'>
          <div className='circle'>
            <img className='home-logo' src={logo} alt='logo' />
          </div>
          <h1 className='home-title'>Sheena Do</h1>
          <h4 className='home-subtitle'>FRONT-END DEVELOPER</h4>
          <svg className='chevron' onClick={() => this.props.scrollTo('About')} x='0px' y='0px' viewBox='0 0 407.437 407.437' style={{enableBackgroundNew: '0 0 407.437 407.437'}} xmlSpace='preserve' width='48px' height='48px'>
            <defs>
              <linearGradient id='gradient1' x1='0%' y1='0%' x2='0%' y2='100%'>
                <stop offset='0%' style={{stopColor: '#ff4d4d'}} />
                <stop offset='100%' style={{stopColor: '#ff4d79'}} />
              </linearGradient>

              <linearGradient id='gradient2' x1='0%' y1='0%' x2='0%' y2='100%'>
                <stop offset='0%' style={{stopColor: '#ff4da6'}}>
                  <animate xlinkHref='#chev2' attributeName="stopColor" values="#ffffff, #ffffff" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="offset" values=".95,.80,.60,.40,.20,0,.20,.40,.60,.80,.95" dur="14s" repeatCount="indefinite" />
                </stop>
                <stop offset='100%' style={{stopColor: '#ff4d79'}} />
              </linearGradient>

            </defs>
            <g>
            	<polygon className='chevron-top' points='407.437,63.398 386.258,42.15 203.718,224.095 21.179,42.15 0,63.398 203.718,266.453' fill='url(#gradient1)'/>
              <polygon id='chev2' className='chevron-bottom' points='203.718,322.929 21.179,140.984 0,162.232 203.718,365.287 407.437,162.232 386.258,140.984' fill='url(#gradient2)'/>
            </g>
          </svg>
        </div>
      </div>
    );
  }
}
