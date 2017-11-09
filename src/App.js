import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Portfolio from './routes/Portfolio/Portfolio';
import Contact from './routes/Contact/Contact';
import './App.css';

class App extends Component {
  scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element != null) {
      window.scrollTo(0, element.offsetTop);
    }
  }

  render() {
    return (
      <div className="App">
        <Nav scrollTo={this.scrollTo}/>
        <Home scrollTo={this.scrollTo}/>
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
