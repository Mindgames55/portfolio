import React from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';

const ContainerDiv = styled.div`
  position: relative;
  overflow: hidden;
  height: 40px;
`;

const StyledSpanPro = styled.span`
  font-size: 32px;
  position: relative;
  z-index: 1000;
  opacity: 1;
  top: 100%;
`;

const SlideIn = posed(StyledSpanPro)({
  enter: {top: '0%'},
  exit: {top: '-100%', opacity:0, transition: { delay: 1500 }},
  preEnter: {top: '100%', opacity: 1}
});

export default class Profession extends React.Component {
  state = {
    profession: 'Front-End Developer',
    professions: ['React Developer', 'Javascript developer','Front-End Developer'],
    hobby: 'learning new stuff',
    hobbies: ['coding', 'weather','music','outdoor adventures','math','physics','learning new stuff'],
    isVisible: false
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(prev => ({
        profession: this.state.professions[(this.state.professions.indexOf(prev.profession) === (this.state.professions.length - 1))?0:this.state.professions.indexOf(prev.profession)+1],
        hobby: this.state.hobbies[(this.state.hobbies.indexOf(prev.hobby) === (this.state.hobbies.length - 1))?0:this.state.hobbies.indexOf(prev.hobby)+1],
        isVisible: !this.state.isVisible
        })
      )
    },2000);

  }

  render() {
    return (
      <ContainerDiv>
        <PoseGroup preEnterPose='preEnter'>
          {this.state.isVisible &&
            <SlideIn key={this.props.value} >
              {(this.props.value === 'profession')?this.state.profession:this.state.hobby}
            </SlideIn>}
        </PoseGroup>
      </ContainerDiv>
    );
  }
}
