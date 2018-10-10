import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {top: 100%;}
  to {top: 0;}
`;

const StyledSpanPro = styled.span`
  font-size: 32px;
  position: relative;
  top: 100%;
  z-index: 1000;

  ${props => {console.log(props.value); return((props.value === 'profession')?`animation: ${slideIn} 1s ease-in forwards`:`animation: ${slideIn} 2s ease-in forwards`)}};
`;

export default class Profession extends React.Component {

  state = {
    profession: 'Front-End Developer',
    professions: ['React Developer', 'Javascript developer','Front-End Developer'],
    hobby: 'learning new stuff',
    hobbies: ['coding', 'weather','music','outdoor adventures','math','physics','learning new stuff']
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(prev => ({
        profession: this.state.professions[(this.state.professions.indexOf(prev.profession) === (this.state.professions.length - 1))?0:this.state.professions.indexOf(prev.profession)+1],
        hobby: this.state.hobbies[(this.state.hobbies.indexOf(prev.hobby) === (this.state.hobbies.length - 1))?0:this.state.hobbies.indexOf(prev.hobby)+1],
        })
      )
    },5000);
  }

  render() {
    return (
      <StyledSpanPro value={this.props.value}>{(this.props.value === 'profession')?this.state.profession:this.state.hobby} </StyledSpanPro>
    );
  }
}
