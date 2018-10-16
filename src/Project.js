import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';



const SlideInBottom = posed.div({
  closed: { y: "100%", opacity: 0 },
  open: { y: "0", opacity: 1, transition: {delay: 1300}}
});

const FadeIn = posed.div({
  closed: { opacity: 0},
  open: { opacity: 1 }
});

const Grow = posed.div({
  closed: { width: 0},
  open: { width: '100%', transition: {delay: 500} }
});

const ProjectDiv = styled.div`
  display: grid;
  grid-template-rows: 1fr 30px 1fr 200px auto;
  grid-template-columns: 30px auto 1fr 30px;
  padding: 70px 0;
  grid-row-gap: 30px;
  align-items: center;
`;


const StyledTitle = styled(FadeIn)`
  grid-column: 2/3;
`;

const FittedSpan = styled(Grow)`
  height: 5px;
  border-radius: 5px;
  background: black;
  grid-column: 2/3;
  align-self: start;
`;



const StyledButton = styled(SlideInBottom)`
  grid-column: -3/-2;
  justify-self: right;
  padding: 20px;
  background: black;
  color: white;
  align-self: stretch;
`;


export default class Project extends React.Component {
  render() {
    return (
      <ProjectDiv>
          <StyledTitle initialPose="closed" pose="open">{this.props.title}</StyledTitle>
          <FittedSpan initialPose="closed" pose="open"/>
          {this.props.children}
          <StyledButton initialPose="closed" pose="open">Learn More</StyledButton>
      </ProjectDiv>
    );
  }
}
