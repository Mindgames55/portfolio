import React from 'react';
import styled from 'styled-components';
import ChangingText from './ChangingText.js';
import Logo from './img/showcase1.jpg';

const StyledMain = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows:  130px auto auto;
  justify-items: center;
  align-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);


  @media screen and (orientation: landscape) {
    grid-template-rows: 10px 1fr 1fr 10px !important;
    grid-template-columns: 1fr 2fr !important;
  }

  @media screen and (min-width: 600px){
    min-height: 100%;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 150px 1fr 1fr 150px;
  }

  @media screen and (min-width: 1400px){
    grid-template-columns: 1fr 1fr;
  }


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

const BackgroundMain = styled.div`
  background-image: url(${Logo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ProfessionDiv = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: auto 1fr auto;
  grid-gap: .5em;

  @media screen and (min-width: 600px){
    width: 70%;
    grid-column: 2/-1;
    grid-row: 2/3;
  }

  @media screen and (min-width: 1000px){
    width: 50%;
  }

  @media screen and (min-width: 1400px){
    grid-column: 1/2;
    width: 70%;
    justify-self: right;
  }
`;

const HobbyDiv = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: auto 1fr;
  grid-gap: .5em;

  @media screen and (min-width: 600px){
    width: 70%;
    grid-column: 2/-1;
    grid-row: 3/4;
  }

  @media screen and (min-width: 1000px){
    width: 50%;
  }

  @media screen and (min-width: 1400px){
    grid-column: 1/2;
    width: 70%
    justify-self: right;
  }

`;



const Home = () => {console.log('renderind'); return(
  <BackgroundMain>
    <StyledMain>
        <h2>HELLO</h2>
         <ProfessionDiv>
           <span > I am a</span>
           <ChangingText value="profession" />
           <span>developer</span>
         </ProfessionDiv>

         <HobbyDiv>
           <span> and I love</span>
           <ChangingText value="hobby" />
         </HobbyDiv>
    </StyledMain>
  </BackgroundMain>

)};

export default Home;
