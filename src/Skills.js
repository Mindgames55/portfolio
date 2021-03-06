import React from 'react';
import styled from 'styled-components';
import { Html5, Css3, Js, ReactLogo, Git, Gulp, Sass} from 'styled-icons/fa-brands';
import jQuery from './img/jquery.svg';
import Bootstrap from './img/bs.svg';
import posed from 'react-pose';

const SkillsSection = styled.section`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  padding-top: 90px;
  background: #EDF2F4;

  @media screen and (orientation: landscape),
  screen and (min-width: 700px) and (orientation: portrait) {
    grid-row: 2/3;
    padding-top: 0;
  }

  @media screen and (min-width: 1400px) {
    grid-row: 1/2 !important;
    overflow-y: scroll;
    height: calc(100vh - 130px);
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 100%;
  }
`;

const StyledDiv = styled(posed.div({
  SlideOutRight: {x: '100%', opacity: 0},
  SlideOutLeft: {x: '-100%', opacity: 0},
  open: {x: 0, opacity: 1}
}))`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  color: #EDF2F4;

  @media screen and (orientation: landscape) {
    padding: 40px;
  }

  @media screen and (min-width: 1400px) {
    grid-template-rows: 100px auto auto;
    align-content: center;
  }

  :nth-child(2){
    background: #2B2D42;

    @media screen and (min-width: 1400px) {
      background #EDF2F4;
      color: grey;
    }
  }

  :nth-child(1){
    background: #EDF2F4;
    color:  grey;

    @media screen and (min-width: 1400px) {
      background white;
    }
  }
  :nth-child(3){
    background #8D99AE;

    @media screen and (min-width: 700px) and (orientation: portrait),
    screen and (min-width: 1000px) and (orientation: landscape) {
      background: #EDF2F4;
      color:  grey;
    }

    @media screen and (min-width: 1400px) {
      background white;
    }
  }

  p:nth-child(1) {
    grid-column: 1/-1;
  }

  img {
    filter: grayscale(100%);
  }
`;

const content = [
  [
    <p key='name'><strong>Languages</strong></p>,
    <Html5 size='30' key='html'/>,
    <Css3 size='30' key='css'/>,
    <Js size='30' key='js'/>,
    <p key='htmlp'> Html </p>,
    <p key='cssp'> Css </p>,
    <p key='jsp'> JavaScript </p>
  ],
  [
    <p key='name'><strong>Libraries</strong></p>,
  <ReactLogo size='30' key='react'/>,
  <img src={jQuery} alt='' key='jqiery' style={{width: '30px', height:'30px'}}/>,
  <img src={Bootstrap} alt='' key='bs' style={{width: '30px', height:'30px'}}/>,
  <p key='reactp'> React </p>,
  <p key='jQuery'> jQuery </p>,
  <p key='bsp'> Bootstrap </p>
],
  [
    <p key='name'><strong>Other Technologies</strong></p>,
  <Git size='30' key='git'/>,
  <Gulp size='30' key='gulp'/>,
  <Sass size='30' key='sass'/>,
  <p key='gitp'> Git </p>,
  <p key='gulpp'> Gulp </p>,
  <p key='sassp'> Sass </p>
  ]
]


const Skills = () => {
  return (
    <SkillsSection>
      {content.map((el, index) => <StyledDiv  initialPose={(index % 2 === 0)?'SlideOutLeft':'SlideOutRight'} pose='open' key={index}>{el}</StyledDiv>)}
    </SkillsSection>
  );
}

export default Skills;
