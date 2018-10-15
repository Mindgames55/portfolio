import React from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';

const ContainerDiv = styled.div`
  position: relative;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
`;

const SlideIn = styled(posed.p({
  enter: {top: '0%'},
  exit: {opacity:0, transition: { delay: 1500}},
  preEnter: {top: '100%', opacity: 1}
}))`
font-size: 25px;
position: absolute;
width: 100%;
text-align: ${props => (props.value === 'profession')?'right':'center'};
`;

export default class Profession extends React.Component {
  state = {
    profession: 'Front-End',
    professions: ['React', 'Javascript','Front-End'],
    hobby: 'learning new stuff',
    hobbies: ['coding', 'weather','music','outdoor adventures','math','physics','learning new stuff'],
    isVisible: true
  }

  counter: null

  componentDidMount() {
    this.counter = setInterval(() => {
      this.setState(prev => (this.props.value === 'profession')?({
        profession: prev.professions[(prev.professions.indexOf(prev.profession) === (prev.professions.length - 1))?0:prev.professions.indexOf(prev.profession)+1],
        isVisible: !prev.isVisible
        })
        :(
          {
            hobby: prev.hobbies[(prev.hobbies.indexOf(prev.hobby) === (prev.hobbies.length - 1))?0:prev.hobbies.indexOf(prev.hobby)+1],
            isVisible: !prev.isVisible
          }
        )
      )
    },2000);
  }

  componentWillUnmount() {
    clearInterval(this.counter);
  }

  render() {
    console.log(this.state.hobby);
    return (
      <ContainerDiv>
        <PoseGroup preEnterPose='preEnter'>
          {this.state.isVisible &&
            <SlideIn key={this.props.value} value={this.props.value} >
              {(this.props.value === 'profession')?this.state.profession:this.state.hobby}
            </SlideIn>}
        </PoseGroup>
      </ContainerDiv>
    );
  }
}
