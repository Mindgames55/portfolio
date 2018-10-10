import React, { Component } from 'react';
import './App.css';
import Main from './Main.js';
import Header from './Header.js';
import Connect from './Connect.js';
import styled from 'styled-components';

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
      <StyledApp>
        <Header />
        <Main />
        <Connect />
      </StyledApp>
    );
  }
}

export default App;
