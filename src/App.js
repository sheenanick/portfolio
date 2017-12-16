import React, { Component } from 'react';
import { connect } from 'react-redux'
import Nav from './components/Nav/Nav';
import Menu from './components/Menu/Menu';
import ScrollButton from './components/ScrollButton/ScrollButton';
import Footer from './components/Footer/Footer';
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Portfolio from './routes/Portfolio/Portfolio';
import Contact from './routes/Contact/Contact';
import { toggleMenu } from './actions/navActions';
import { submitContact, resetContact } from './actions/contactActions';
import { NAV } from './util/constants';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Home'
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    for (var i = 0; i < NAV.length; i++) {
      const id = NAV[i]['id'];
      const element = document.getElementById(id);
      const rect = element.getBoundingClientRect();
      const { y, height } = rect;
      if (y > 0 - height + 5) {
        this.setState({active: id});
        return true;
      }
    }
    return false;
  }

  scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element != null) {
      element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }
  }

  render() {
    const { showMenu, toggleMenu, submitted, submitContact, resetContact } = this.props;
    const { active } = this.state;
    return (
      <div className="App">
        <Menu scrollTo={this.scrollTo} active={active} toggleMenu={toggleMenu} showMenu={showMenu} />
        <Nav scrollTo={this.scrollTo} active={active} toggleMenu={toggleMenu}/>
        <Home scrollTo={this.scrollTo} />
        <About />
        <Portfolio />
        <Contact submitted={submitted} submitContact={submitContact} resetContact={resetContact} />
        <ScrollButton scrollTo={this.scrollTo} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showMenu: state.navState.showMenu,
    submitted: state.contactState.submitted
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: function() { dispatch(toggleMenu()); },
    submitContact: function(contact) { dispatch(submitContact(contact)); },
    resetContact: function() { dispatch(resetContact()); },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
