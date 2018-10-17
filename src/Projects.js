import React from 'react';
import styled from 'styled-components';
import Project from './Project.js';
import { ReactLogo, Js, Css3Alt, Google, Github} from 'styled-icons/fa-brands';
import recover from './img/recover.png';
import reads from './img/my-reads.png';
import rest from './img/rest-rev.png';
import arcade from './img/arcade.png';
import memory from './img/memory.png';
import Footer from './Footer.js';
import posed from 'react-pose';
import Waypoint from 'react-waypoint';


const StyledProjects = styled.section`
`;

const MoreDiv = styled(posed.div({
  open: {x: 0, opacity: 1, transition: {delay: 0}},
  closed: {x: '-100%', opacity:0}
}))`

`;

const StyledMore = styled(posed.section({
  open: {x: 0, opacity: 1},
  closed: {x: '-100%', opacity:0}
}))`
  display: grid;
  grid-template-rows: 1fr 130px;
  background: black;
  color: white;
  z-index: 10000;
top: 0;
width: 100%;
height: 100vh;
position: fixed;
`;

export default class Projects extends React.Component {

  state = {
    morePose: 'closed'
  }

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

  MoreInView = () => {
    this.setState(prev => (
      {morePose: (prev.morePose === 'closed')?'open':'closed'}
    ))
  }

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
      <Waypoint onEnter={this.MoreInView} onLeave={this.MoreInView} bottomOffset='200px'/>
      <div style={{height: '200px'}}></div>
      <StyledMore pose={this.state.morePose}>

          <MoreDiv pose={this.state.morePose}>
            <h2>Want to see more?</h2>
            <button>Go to my <Github size='30' /> </button>
          </MoreDiv>
          <Footer pose={this.state.morePose} delay={0}/>
        </StyledMore>

      </StyledProjects>
    );
  }
}
