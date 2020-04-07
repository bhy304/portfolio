import React from 'react';

import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Footer from './components/Footer';

import './App.css';

const App = () => {
    return (
        <div className="App">
            <Intro />
            <About />
            <Skills />
            <Project />
            <Footer />
        </div> 
    )
}

export default App;