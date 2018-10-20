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

const StyledButton = styled.button`
  border: 0;
  background: #D90429;
  color: white;
  padding: 20px;
`;

const MoreDiv = styled(posed.div({
  open: {x: 0, opacity: 1},
  closed: {x: '-100%', opacity:0}
}))`
  width: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;

  a {
    text-align: center;
  }
`;

const StyledMore = styled(posed.section({
  open: {x: 0, opacity: 1, transition: {duration: 200, ease: 'linear'}},
  closed: {x: '-100%', opacity:0}
}))`
  display: grid;
  grid-template-rows: 1fr 130px;
  background: #D90429;
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
    [<ReactLogo size='30' color='#61DBFB' key='react'/>, ' React', <span key='span' style={{fontSize: '30px'}}> | </span>, <Google color='#db3236' size='25' key='google' />, ' Maps API'],
    [<ReactLogo size='30' color='#61DBFB' key='react'/>, ' React'],
    [<Js size='30' color='#F0DB4F' key='js'/>, ' Javascript', <span key='span' style={{fontSize: '30px'}}> | </span> ,' PWA', ' | MVC'],
    [<Js size='30' color='#F0DB4F' key='js'/>, ' Javascript', <span key='span' style={{fontSize: '30px'}}> | </span>, ' ES6'],
    [<Css3Alt size='30' color='' key='css'/>, ' CSS Grid']
  ]

  title = [
    'Recover',
    'My Reads',
    'Restaurant Reviews',
    'Arcade Game',
    'Memory Game'
  ]

  info = [
    ['Uses Google Maps API to locate free cycling items close to user location',
     'Implemented Auth0 protocol',
      'Consumed third party API (Trash nothing) for data requests'],
    ['Built a responsive web application that allows users to select and categorize books into a virtual bookshelf',
     'Leveraged React to support a dynamic user interface that interacts with an API server and client library'],
    ['Built a Progressive web App to pull customer reviews on restaurants in new York City',
     'It is accessible, secure, responsive, cross-browser and built with an offline-first and mobile-first approach'],
    ['Built a clone of the classic game, Frogger',
     'Instantiated player, and moving objects in JavaScript\'s object-oriented pseudo-classical style'],
    ['Built a complete browser-based card matching game in JavaScript with layout made with CSS Grid',
     'Implemented a leaders board feature using web local storage and timer, rating, flipping cards, matched and unmatched couples animation using CSS keyframes']
  ]

  link = [
    ['https://github.com/Mindgames55/Recover','https://mindgames55.github.io/Recover/'],
    ['https://github.com/Mindgames55/My-reads-App','https://github.com/Mindgames55/My-reads-App'],
    ['https://github.com/Mindgames55/restaurant-reviews-app','https://mindgames55.github.io/restaurant-reviews-app/'],
    ['https://github.com/Mindgames55/arcade-game','https://mindgames55.github.io/arcade-game/'],
    ['https://github.com/Mindgames55/Memory-game','https://mindgames55.github.io/Memory-game/']
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
                                                        link={this.link[index]}
                                                        title={this.title[index]}>
                                                          {proj}
                                                    </Project>)}
      <Waypoint onEnter={this.MoreInView} onLeave={this.MoreInView} bottomOffset='200px'/>
      <div style={{height: '200px'}}></div>
      <StyledMore pose={this.state.morePose}>

          <MoreDiv pose={this.state.morePose}>
            <h2>Want to see more?</h2>
            <a href='https://github.com/Mindgames55' target='_blank' rel='noopener noreferrer'><StyledButton>Go to my <Github size='30' /> </StyledButton></a>
          </MoreDiv>
          {/* <Footer pose={this.state.morePose} delay={0}/>*/}
        </StyledMore>

      </StyledProjects>
    );
  }
}
