import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.div`
  display: grid;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  grid-row: 2/3;
  align-self: stretch;
  position: relative;
`;

// const Styleimg = styled.div`
//   width: 100%;
//   background-image: url(${profile});
//   background-size: cover;
// `;

const StyleShowCase = styled.div`
  background: #000;
  opacity: 0.5;
  position: absolute;
  bottom: 0;
  width: 100%;

  p {
    color: #fff;
    font-size: 1.2em;
  }
`;

export default class Main extends React.Component{

  state = {
    profession: 'Front-End Developer',
    hobby: 'learning new stuff',
    professions: ['React Developer', 'Javascript developer','Front-End Developer'],
    hobbies: ['weather','music','coding','outdoor adventures','math','physics','learning new stuff']
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(prev => ({
        profession: this.state.professions[(this.state.professions.indexOf(prev.profession) === (this.state.professions.length - 1))?0:this.state.professions.indexOf(prev.profession)+1],
        hobby: this.state.hobbies[(this.state.hobbies.indexOf(prev.hobby) === (this.state.hobbies.length - 1))?0:this.state.hobbies.indexOf(prev.hobby)+1]
        })
      )
    },5000);
  }

  render() {
    return (
      <StyledMain>
        <StyleShowCase>
          <p> Hello</p>
          <p> I am a {this.state.profession} and</p>
          <p> I love {this.state.hobby}</p>
        </ StyleShowCase>
      </StyledMain>
    );
  }
}
