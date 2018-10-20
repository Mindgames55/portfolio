import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';
import Header from './Header.js';
import styled, { ThemeProvider} from 'styled-components';
import { theme } from './theme/globalStyle'
import { Route } from 'react-router-dom';
import Projects from './Projects.js';
import About from './About.js';
import Skills from './Skills.js';


const StyledApp = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 90px 1fr auto;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledApp>
          <Header />
          <Route exact path='/' render={() =>   <Home />} />
          <Route path='/projects' render={() =>   <Projects />} />
          <Route path='/about' render={() =>   <About />} />
          <Route path='/skills' render={() =>   <Skills />} />

        </StyledApp>
      </ThemeProvider>
    );
  }
}

export default App;
