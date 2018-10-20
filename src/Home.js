import React from 'react';
import styled from 'styled-components';
import ChangingText from './ChangingText.js';
import Logo from './img/logo3.png';

const StyledMain = styled.div`
  display: grid;
  grid-template-rows:  90px 1fr 90px;
  position: relative;
  justify-items: center;
  align-items: center;
  background-image: url(${Logo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;


  h2{
    font-size: 38px;
    margin: 0;
  }

  p, span {
    font-size: 25px;
    margin: 0;
    padding: 20px 0;
    color: #2B2D42;
    font-weight: bold;

  }
`;



const Home = () => {console.log('renderind'); return(
  <StyledMain>
       <div style={{
           display: 'grid',
           width: '90%',
           gridTemplateColumns: 'auto 1fr auto',
           gridGap: '.5em'
         }}>
         <span> I am a</span>
         <ChangingText value="profession" />
         <span>developer</span>
       </div>

       <div style={{
           display: 'grid',
           width: '90%',
           gridRow: '3/4',
           gridTemplateColumns: 'auto 1fr',
           gridGap: '.5em'
         }}>
         <span> and I love</span>
         <ChangingText value="hobby" />
       </div>
  </StyledMain>
)};

export default Home;
