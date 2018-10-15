import React, { Component } from 'react';
import './App.css';
import Main from './Main.js';
import Header from './Header.js';
import Connect from './Connect.js';
import styled, { ThemeProvider} from 'styled-components';
import { theme } from './theme/globalStyle'
import { Route } from 'react-router-dom';
import Projects from './Projects.js'

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 70px 1fr 130px;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledApp>
          <Header />
          <Route exact path='/home' render={() =>   <Main />} />
          <Route  path='/projects' render={() =>   <Projects />} />

          <Connect />
        </StyledApp>
      </ThemeProvider>
    );
  }
}

export default App;
