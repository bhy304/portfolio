import React from 'react';

import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Footer from './components/Footer';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
}

html {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #212121;
}

body {
    width: 100%;
}

a {
    text-decoration: none;
    color: #212121;
    text-align: center;
}

a:hover {
    color: #0066ff;
}
`;

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