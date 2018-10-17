import React from 'react';
import styled from 'styled-components';
import Project from './Project.js';
import { ReactLogo, Js } from 'styled-icons/fa-brands';
import recover from './img/recover.png';
import reads from './img/my-reads.png';
import rest from './img/rest-rev.png';
import arcade from './img/arcade.png';
import memory from './img/memory.png';


const StyledProjects = styled.section`
`;

export default class Projects extends React.Component {

  technologies = [
    [<ReactLogo size='30' key='react1'/>, ' React'],
    [<ReactLogo size='30' key='react2'/>, ' React'],
    [<Js size='30' key='js'/>, ' Javascript', ' | PWA'],
    [],
    []
  ]

  title = [
    'Recover',
    'My Reads',
    'Restaurant Reviews',
    'Arcade Game',
    'Memory Game'
  ]

  src = [
    recover,
    reads,
    rest,
    arcade,
    memory
  ]

  render() {
    return (
      <StyledProjects>
          {this.technologies.map((proj, index) => <Project key={index} src={this.src[index]} title={this.title[index]}> {proj} </Project>)}
      </StyledProjects>
    );
  }
}
