import React from 'react';
import GlobalStyle from 'GlobalStyle';
import Intro from 'components/Intro';
import About from 'components/About';
import Skills from 'components/Skills';
import Project from 'components/Project';
import Footer from 'components/Footer';

const App = () => {
    return (
        <div className="App">
            <GlobalStyle />
            <Intro />
            <About />
            <Skills />
            <Project />
            <Footer />
        </div>
    )
}

export default App;