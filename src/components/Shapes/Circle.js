import React, { Component } from 'react';

export default class Circle extends Component {
  render() {
    return (
      <div className='Circle' style={style} />
    );
  }
}

const style = {
  height: '8px',
  width: '8px',
  marginRight: '8px',
  background: '#ff4d79',
  borderRadius: '50%',
  display: 'inline-block'
};
