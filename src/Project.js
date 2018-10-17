import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import Waypoint from 'react-waypoint';


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
`;

const FittedSpan = styled(Grow)`
  height: 5px;
  border-radius: 5px;
  background: black;
  grid-column: 2/3;
  align-self: start;
`;


const ImgDiv = styled(FadeIn)`
  background-image: ${props => `url(${props.src})`};
  background-size: cover;
  grid-column: 1/-1;
  align-self: stretch;
`;

const StyledButton = styled(SlideInBottom)`
  grid-column: -3/-2;
  grid-row: -2/-1;
  justify-self: right;
  padding: 20px;
  background: black;
  color: white;
  align-self: stretch;
`;


export default class Project extends React.Component {

  state = {
    pose: 'closed'
  }

  projectInView = () => {
    console.log('inview');
    this.setState({pose: 'open'});
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
            <StyledButton pose={this.state.pose}>Learn More</StyledButton>
        </ProjectDiv>
      </Waypoint>
    );
  }
}
