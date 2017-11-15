import React, { Component } from 'react';
import { connect } from 'react-redux'
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Portfolio from './routes/Portfolio/Portfolio';
import Contact from './routes/Contact/Contact';
import { toggleMenu } from './actions/navActions';
import './App.css';

class App extends Component {
  scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element != null) {
      window.scrollTo(0, element.offsetTop);
    }
  }

  toggle = () => {
    this.props.toggleMenu();
  }

  render() {
    const { showMenu } = this.props;
    return (
      <div className="App">
        <Nav scrollTo={this.scrollTo} toggleMenu={this.toggle} showMenu={showMenu} />
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showMenu: state.navState.showMenu,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: function() { dispatch(toggleMenu()); },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
