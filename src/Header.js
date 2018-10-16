import React from 'react';
import styled from 'styled-components';
import Menu from './Menu.js';
import posed from 'react-pose';


const ButtonDiv = styled.div`
width: 50px;
height: 37px;
position: relative;
cursor: pointer;
`;

const Header = styled.div`
  height: 100%
  display: flex;
  align-items: center;
  margin: 0 20px;
`;

const StyledSpan = styled.span`
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: #000;
  border-radius: 4px;
  opacity: 1;
  left: 0;
  transform-origin: left center;

:nth-child(1) {
  top: 0px;
}

:nth-child(2) {
  top: 18px;
}

:nth-child(3) {
  top: 36px;
}
`;

const Topbar = posed(StyledSpan)({
  open: {transform: 'rotate(45deg)'},
  close: {transform: 'rotate(0deg)'}
});

const Bottombar = posed(StyledSpan)({
  open: {transform: 'rotate(-45deg)'},
  close: {transform: 'rotate(0deg)'}
});

const Middlebar = posed(StyledSpan)({
  open: {width: 0, opacity: 0},
  close: {width: '100%', opacity: 1}
});

export default class MenuButton extends React.Component {
    state = {
      open: false
    }

    toggleMenu = () => {
      this.setState({open: !this.state.open});
    }

    render() {
      let pose = (this.state.open)?'open':'close';
      return (
        <React.Fragment>
            <Header key='header'>
              <ButtonDiv role="button" onClick={this.toggleMenu} >
                <Topbar pose={pose}></Topbar>
                <Middlebar pose={pose}></Middlebar>
                <Bottombar pose={pose}></Bottombar>
              </ButtonDiv>
            </Header>
            {(this.state.open) && <Menu toggleMenu={this.toggleMenu} />}
        </React.Fragment>
      );
    }
}
