import React from 'react';
import styled from 'styled-components';
import ChangingText from './ChangingText.js'

const StyledMain = styled.div`
  display: grid;
  grid-template-rows: 50px repeat(4, 1fr);
  grid-row: 3/4;
  position: relative;
  justify-items: center;

  h2{
    font-size: 38px;
    margin: 0;
  }

  p {
    font-size: 25px;
    margin: 0;
    padding: 20px 0;

  }
`;

const Main = () => {console.log('renderind'); return(
  <StyledMain>
      <h2> Hello</h2>
      <p> I am a</p>
       <ChangingText value="profession" />
       <p>and I love</p>
      <ChangingText value="hobby" />

  </StyledMain>
)};

export default Main;
