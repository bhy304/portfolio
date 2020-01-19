import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Header />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App;