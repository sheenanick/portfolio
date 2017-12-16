import React, { Component } from 'react';

export default class Bar extends Component {
  render() {
    return (
      <div className='Bar' style={style} />
    );
  }
}

const style = {
  height: '3px',
  width: '144px',
  margin: '8px 0 64px 0',
  background: '#252429',
};
