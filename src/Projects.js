import React from 'react';
import styled from 'styled-components';
import Project from './Project.js';
import { ReactLogo, Js } from 'styled-icons/fa-brands';
import arcade from './img/arcade.png';
import memory from './img/memory.png';
import reads from './img/my-reads.png';
import recover from './img/recover.png';
import rest from './img/rest-rev.png';

import posed from 'react-pose';

const StyledProjects = styled.section`
`;

const SlideInRight = posed.div({
  closed: { x: "100%" },
  open: { x: "0", transition: {delay: 800}}
});

const FadeIn = posed.div({
  closed: { opacity: 0},
  open: { opacity: 1 }
});

const StyledSkillsDiv = styled(FadeIn)`
  grid-column: 2/4;
`;

const ImgDiv = styled(SlideInRight)`
  background-image: ${props => `url(${props.src})`};
  background-size: cover;
  grid-column: 1/-1;
  align-self: stretch;
`;

export default class Projects extends React.Component {
  

  render() {
    return (
      <StyledProjects>
        <Project title="Recover">

          <StyledSkillsDiv initialPose="closed" pose="open"> <ReactLogo size='30' /> React</StyledSkillsDiv>
          <ImgDiv initialPose="closed" pose="open" src={recover}/>

        </Project>

        <Project title="My Reads">
          <StyledSkillsDiv initialPose="closed" pose="open"> <ReactLogo size='30' /> React</StyledSkillsDiv>
          <ImgDiv initialPose="closed" pose="open" src={reads}/>
        </Project>

        <Project title="Restaurant Reviews App">
          <StyledSkillsDiv initialPose="closed" pose="open"> <Js size='30' /> Javascript | PWA</StyledSkillsDiv>
          <ImgDiv initialPose="closed" pose="open" src={rest}/>

        </Project>

        <Project title="Arcade game">
          <StyledSkillsDiv initialPose="closed" pose="open"> <Js size='30' /> Javascript | PWA</StyledSkillsDiv>
          <ImgDiv initialPose="closed" pose="open" src={arcade}/>
        </Project>

        <Project title="Memory game">
          <StyledSkillsDiv initialPose="closed" pose="open"> <Js size='30' /> Javascript | PWA</StyledSkillsDiv>
          <ImgDiv initialPose="closed" pose="open" src={memory}/>

        </Project>
      </StyledProjects>
    );
  }
}
