import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const ContainerDiv = styled.div`
  position: relative;
  overflow: hidden;
`;

const StyledSpanPro = styled.span`
  font-size: 32px;
  position: relative;
  z-index: 1000;
  opacity: 1;
  top: 100%;
`;

const SlideIn = posed(StyledSpanPro)({
  down: {top: '100%'},
  on: {top: '0%', opacity:1},
  top: {top: '-100%', opacity:0}
});

export default class Profession extends React.Component {
  state = {
    profession: 'Front-End Developer',
    professions: ['React Developer', 'Javascript developer','Front-End Developer'],
    hobby: 'learning new stuff',
    hobbies: ['coding', 'weather','music','outdoor adventures','math','physics','learning new stuff'],
    pose: 'on'
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(prev => ({
        profession: this.state.professions[(this.state.professions.indexOf(prev.profession) === (this.state.professions.length - 1))?0:this.state.professions.indexOf(prev.profession)+1],
        hobby: this.state.hobbies[(this.state.hobbies.indexOf(prev.hobby) === (this.state.hobbies.length - 1))?0:this.state.hobbies.indexOf(prev.hobby)+1],
        pose: 'on'
        })
      )
    },8000);
    setInterval(() => {
      this.setState(prev => ({
        pose: 'top'
        })
      )
    },7000);
    setInterval(() => {
      this.setState(prev => ({
        pose: 'down'
        })
      )
    },7500);
  }

  render() {
    let pose = this.state.pose;
    return (
      <ContainerDiv>
        <SlideIn pose={pose}>{(this.props.value === 'profession')?this.state.profession:this.state.hobby} </SlideIn>
      </ContainerDiv>
    );
  }
}
