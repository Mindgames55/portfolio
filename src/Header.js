import React from 'react';
import styled from 'styled-components';
import {Menu} from 'styled-icons/material/';
import MenuComp from './Menu.js';
import transition from "styled-transition-group";

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr;
  justify-items: center;
  align-items: center;
  position: relative;
`;

const StyledH1 = styled.h1`
  align-self: start;
`;

const ScaleMenu = transition.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  position: absolute;
  border: 1px solid red;
  top: 110%;
  z-index: 100;

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
    this.setState({show: !this.state.show});
  }

  render() {
    return (
      <StyledHeader>
        <Menu size='50' role="button" onClick={this.toggleMenu}/>
        <StyledH1>Mayguen Ojeda </StyledH1>
        <ScaleMenu in={this.state.show} timeout={400} unmountOnExit>
            <MenuComp />
        </ScaleMenu>
      </StyledHeader>
    );
  }
}
