import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
      </div>
    );
  }
}

export default App;
