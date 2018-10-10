import React from 'react';
import styled from 'styled-components';
import MenuButton from './MenuButton.js';
import MenuComp from './Menu.js';
import transition from 'styled-transition-group';

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr;
  justify-items: center;
  align-items: center;
  position: relative;
  border-bottom: 1px solid black;
`;

const StyledH1 = styled.h1`
  align-self: start;
`;

const ScaleMenu = transition.div`
  display: grid;
  width: 90%;
  height: 110px;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  position: absolute;
  top: 110%;
  z-index: 100;
  overflow-x: hidden;

  &:enter { width : 0; }
  &:enter-active {
    width: 100%;
    transition: width 400ms ease-out;
  }
  &:exit { width: 100%; }
  &:exit-active {
    width: 0;
    transition: width 400ms ease-in;
  }
`;

export default class Header extends React.Component{
  state = {
    show: false
  }

  toggleMenu = () => {
    this.setState({show: !this.state.show, open: !this.state.open, menuClicked: true});
  }

  render() {
    return (
      <StyledHeader>
        <MenuButton role="button" toggleMenu={this.toggleMenu} />
        <StyledH1>Mayguen Ojeda </StyledH1>
        <ScaleMenu in={this.state.show} timeout={400} unmountOnExit>
            <MenuComp />
        </ScaleMenu>
      </StyledHeader>
    );
  }
}
