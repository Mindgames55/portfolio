import React from 'react';
import styled from 'styled-components';
import ChangingText from './ChangingText.js'

const StyledMain = styled.div`
  display: grid;
  grid-row: 2/3;
  position: relative;

  h2{
    font-size: 38px;
  }

  p {
    font-size: 32px;
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
