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
  position: absolute;

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
  position: relative;


  @media screen and (orientation: landscape) {
    min-height: 100vh;
  }
`;

const ProfessionDiv = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: auto 1fr auto;
  grid-gap: .5em;
  max-width: 350px;
`;

const HobbyDiv = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: auto 1fr auto;
  grid-gap: .5em;
  max-width: 350px;
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
          <span> </span>
         </HobbyDiv>
    </StyledMain>
  </BackgroundMain>

)};

export default Home;
