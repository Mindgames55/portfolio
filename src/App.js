import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';
import Header from './Header.js';
import styled, { ThemeProvider} from 'styled-components';
import { theme } from './theme/globalStyle'
import { Route } from 'react-router-dom';
import Projects from './Projects.js';
import About from './About.js';
import Menu from './Menu';
import Skills from './Skills.js';
import Footer from './Footer';
import './App.css';

const StyledApp = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 100vh auto;

  @media screen and (orientation: landscape) and (max-width: 700px){
    grid-template-rows: 110px 1fr !important;
  }

  @media screen and (min-width: 700px){
    grid-template-rows: 200px 1fr 130px;
  }

  @media screen and (min-width: 1400px){
    grid-template-rows: 1fr;
    grid-template-columns: 130px 1fr;
  }

`;

class App extends Component {

  state = {
    isCellPhone: true
  }

  updateViewport = () => {
    this.setState({isCellPhone: window.innerWidth < 700});
  }

  componentDidMount() {
    this.updateViewport();
    window.addEventListener("resize", this.updateViewport);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateViewport);
  }

  render() {
    return (this.state.isCellPhone)?(
      <ThemeProvider theme={theme}>
        <StyledApp>
          <Header />
          <Route exact path='/' render={() =>   <Home />} />
          <Route path='/projects' render={() =>   <Projects />} />
          <Route path='/about' render={() =>   <About />} />
          <Route path='/skills' render={() =>   <Skills />} />

        </StyledApp>
      </ThemeProvider>
    ):
    (
      <ThemeProvider theme={theme}>
        <StyledApp>
          <Menu />
          <Route exact path='/' render={() =>   <Home />} />
          <Route path='/projects' render={() =>   <Projects />} />
          <Route path='/about' render={() =>   <About />} />
          <Route path='/skills' render={() =>   <Skills />} />
          <Footer />
        </StyledApp>
      </ThemeProvider>
    );
  }
}

export default App;
