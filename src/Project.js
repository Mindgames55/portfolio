import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import Waypoint from 'react-waypoint';
import InfoDiv from './InfoDiv.js';
import { MoreHoriz } from 'styled-icons/material/MoreHoriz';
import { ArrowBack }from 'styled-icons/material/ArrowBack'
import { Code } from 'styled-icons/fa-solid/Code';
import { Github} from 'styled-icons/fa-brands';



const SlideInRight = posed.div({
  closed: { x: "100%", opacity: 0 },
  open: { x: "0", opacity: 1}
});

const SlideInBottom = posed.div({
  closed: { y: "100%", opacity: 0 },
  open: { y: "0", opacity: 1}
});

const FadeIn = posed.div({
  closed: { opacity: 0},
  open: { opacity: 1}
});

const Grow = posed.div({
  closed: { width: 0},
  open: { width: '100%'}
});

const ProjectDiv = styled.div`
  display: grid;
  grid-template-rows: 1fr 30px 1fr 200px auto;
  grid-template-columns: 30px auto 1fr 30px;
  padding: 70px 0;
  grid-row-gap: 30px;
  align-items: center;
`;

const StyledSkillsDiv = styled(FadeIn)`
  grid-column: 2/3;
`;

const StyledTitle = styled(SlideInRight)`
  grid-column: 2/3;
  text-transform: uppercase;
`;

const FittedSpan = styled(Grow)`
  height: 5px;
  border-radius: 5px;
  background: #D90429;
  grid-column: 2/3;
  align-self: start;
`;


const ImgDiv = styled(FadeIn)`
  background-image: ${props => `url(${props.src})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  grid-column: 1/-1;
  grid-row: 4/5;
  align-self: stretch;
`;

const StyledPanel = styled(SlideInBottom)`
  grid-column: 2/-2;
  grid-row: -2/-1;
  justify-self: center;
  align-self: stretch;
  display: grid;
  width: 100%;
  align-items: center;
  grid-template-columns: 1fr auto;

  a {
    color: black;

    &:hover {
      color: #D90429;
    }
  }
`;

const StyledButton = styled.button`
  background: #2B2D42;
  color: #EDF2F4;
  border: 0;
  height: 100%
  padding:  10px 15px;
  border-radius: 5px;
  `;

export default class Project extends React.Component {

  state = {
    pose: 'closed',
    poseInfo: 'closed',
    text: <MoreHoriz size='30' />
  }

  projectInView = () => {
    console.log('inview');
    this.setState({pose: 'open'});
  }

  displayInfo = () => {
    this.setState(prev => (prev.poseInfo === 'closed')?(
          {poseInfo: 'open', text: <ArrowBack size='30' />}
        )
        :
        (
          {poseInfo: 'closed', text: <MoreHoriz size='30' />}
        )
    );
  }

  render() {
    console.log(this.state.pose);
    return (
      <Waypoint onEnter={this.projectInView} bottomOffset='200px'>
        <ProjectDiv ref={this.props.innerRef}>
            <StyledTitle pose={this.state.pose}>{this.props.title}</StyledTitle>
            <FittedSpan pose={this.state.pose}/>
            <StyledSkillsDiv pose={this.state.pose}>{this.props.children}</StyledSkillsDiv>
            <ImgDiv src={this.props.src} pose={this.state.pose}/>
            <InfoDiv pose={this.state.poseInfo}>{this.props.info}</InfoDiv>
            <StyledPanel pose={this.state.pose}>
              <div><a href={this.props.link[0]} target='_blank' rel='noopener noreferrer'><Code size='30' /></a> <span style={{fontSize: '40px', textAlign: 'center'}}> | </span> <a href={this.props.link[1]} target='_blank' rel='noopener noreferrer'><Github size='30' /></a></div>
              <StyledButton onClick={this.displayInfo}>{this.state.text}</StyledButton>
            </StyledPanel>
        </ProjectDiv>
      </Waypoint>
    );
  }
}
