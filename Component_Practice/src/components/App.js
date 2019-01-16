import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Main from './Main';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import SocialLinks from './SocialLinks';
import Footer from './Footer';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Main />
        <Projects />
        <Resume />
        <Contact />
        <SocialLinks />
        <Footer />
      </div>
    );
  }
}


export default App;
