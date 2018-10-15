import React from 'react';
import styled from 'styled-components';
import ChangingText from './ChangingText.js'

const StyledMain = styled.div`
  display: grid;
  grid-template-rows:  90px 50px repeat(4, 1fr);
  grid-row: 2/3;
  position: relative;
  justify-items: center;

  h2{
    font-size: 38px;
    margin: 0;
  }

  p, span {
    font-size: 25px;
    margin: 0;
    padding: 20px 0;

  }
`;

const Main = () => {console.log('renderind'); return(
  <StyledMain>
      <h2> Hello</h2>
      <p> I am a</p>
       <div style={{
           display: 'grid',
           width: '100%',
           gridTemplateColumns: 'auto 50%',
           gridGap: '.5em'
         }}>
         <ChangingText value="profession" />
         <span>developer</span>
       </div>
       <p>and I love</p>
      <ChangingText value="hobby" />

  </StyledMain>
)};

export default Main;
