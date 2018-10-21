import React from 'react';
import  Profile  from './img/profile-small.jpg';
import styled from 'styled-components';
import posed from 'react-pose';

const AboutDiv = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  position: relative;
  top: 70px;
  grid-column: 1/-1;
  text-align: justify;
`;

const StyledImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: -70px;
  border: 3px solid #f6f6f6;
`;

const PrimaryInfo = styled(posed.div({
  open: {background: '#8D99AE'},
  close: {background: '#EDF2F4'}
}))`
  color: #EDF2F4;
  padding: 50px 30px;
`;

const SecInfo = styled.div`
  padding: 40px 30px;
`;

const About = (props) => {
  return (
    <AboutDiv>
        <StyledImg src={Profile} alt="profile"/>
        <PrimaryInfo initialPose='close' pose='open'>
        <p>
        Passionate self taugh web developer. I love unique
        and clean web designs that gives the user the
        best experience. I enjoy coding, weather, outdoor
        adventures, math, physics, music, dancing and
        learning new stuff.
        </p>
        </PrimaryInfo>
        <SecInfo>
        <p>I am a meteorologist by education. It was during my
        first years working as a tropical cyclone researcher
        that I discovered the coding world, working in a Linux
        environment, and developing algorithms in Fortran
        and C. I just fell in love with programming. I gained
        a lot of programming skills while working as a
        meteorologist but what I really love is UI/UX development, that
         is how I transitioned from scientific programming
         to web development.
         </p>
         <p>I am a happy graduate from the Udacity Front End Web development nanodegree, which was possible thanks to
         the Grow With Google scholarship program</p>
         </SecInfo>
    </AboutDiv>
  );
}

export default About;
