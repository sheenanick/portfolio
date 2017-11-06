import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './routes/Home/Home';
import Portfolio from './routes/Portfolio/Portfolio';
import Contact from './routes/Contact/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>
        <Footer />
      </div>
    );
  }
}

export default App;
