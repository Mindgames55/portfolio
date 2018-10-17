import React from 'react';
import styled from 'styled-components';
import Project from './Project.js';
import { ReactLogo, Js, Css3Alt, Google} from 'styled-icons/fa-brands';
import recover from './img/recover.png';
import reads from './img/my-reads.png';
import rest from './img/rest-rev.png';
import arcade from './img/arcade.png';
import memory from './img/memory.png';


const StyledProjects = styled.section`
`;

export default class Projects extends React.Component {

  technologies = [
    [<ReactLogo size='30' key='react'/>, ' React', ' | ', <Google size='25' key='google' />, ' Maps API'],
    [<ReactLogo size='30' key='react'/>, ' React'],
    [<Js size='30' key='js'/>, ' Javascript', ' | PWA', ' | MVC'],
    [<Js size='30' key='js'/>, ' Javascript', ' | ES6'],
    [<Css3Alt size='30' key='css'/>, ' CSS Grid']

  ]

  title = [
    'Recover',
    'My Reads',
    'Restaurant Reviews',
    'Arcade Game',
    'Memory Game'
  ]

  info = [
    ['Built an app in React to place on a map free items around the user location pulled from a free-cycling app',
     'Implemented a service worker to cache assets and intercepts fetch requests',
      'Consumed third party APIs for data requests'],
    ['recoveract', 'js'],
    ['reccact', 'js'],
    ['reajddct', 'js'],
    ['react', 'js']
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
          {this.technologies.map((proj, index) => <Project
                                                        info={this.info[index].map((li,idx) => <li key={idx}>{li}</li>)}
                                                        key={index}
                                                        src={this.src[index]}
                                                        title={this.title[index]}>
                                                          {proj}
                                                    </Project>)}
      </StyledProjects>
    );
  }
}
