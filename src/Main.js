import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.div`
  display: grid;
  grid-row: 2/3;
  position: relative;
  justify-items: center;
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
          <h2> Hello</h2>
          <p> I am a {this.state.profession} and</p>
          <p> I love {this.state.hobby}</p>
      </StyledMain>
    );
  }
}
