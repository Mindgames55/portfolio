import React from 'react';
import styled from 'styled-components';
import Project from './Project.js';
import { ReactLogo, Js } from 'styled-icons/fa-brands';
import arcade from './img/arcade.png';

const StyledProjects = styled.section`
`;

export default class Projects extends React.Component {


  render() {
    return (
      <StyledProjects>
        <Project title="Recover">
          <ReactLogo size='30' /> React
        </Project>

        <Project title="My Reads">
          <ReactLogo size='30' /> React
        </Project>

        <Project title="Restaurant Reviews App">
          <Js size='30' /> Javascript | PWA
        </Project>

        <Project title="Arcade game">
          <img src={arcade} alt="Arcade game"/>
        </Project>

        <Project title="Memory game">

        </Project>
      </StyledProjects>
    );
  }
}
