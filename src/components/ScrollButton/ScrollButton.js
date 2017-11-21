import React, { Component } from 'react';
import up from '../../img/icons/up.png';
import './ScrollButton.css';

export default class ScrollButton extends Component {
  render() {
    return (
      <div className='ScrollButton center'>
        <button className='scroll-arrow' onClick={() => this.props.scrollTo('Home')}>
          <img src={up} alt='up arrow' />
        </button>
      </div>
    );
  }
}
