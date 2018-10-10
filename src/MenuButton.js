import React from 'react';
import styled, { keyframes } from 'styled-components';

function MenuButton(props) {
  console.log(props);
  const StyledDiv = styled.div`
  width: 60px;
  height: 45px;
  position: relative;
  margin: 50px auto;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
  `;

  const StyledSpan = styled.span`
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    background: #d3531a;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 1s ease-in-out;
    transform-origin: left center;

  :nth-child(1) {
    top: 0px;

    ${props => props.menuClicked && ((props.open)?`animation: ${openMenu} 1s ease-in-out forwards`:`animation: ${closeMenu} .5s ease-in-out forwards`)};
  }

  &:nth-child(2) {
    top: 18px;
  }

  &:nth-child(3) {
    top: 36px;
  }
  `;

  const openMenu = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(45deg);
    }
  `;

  const closeMenu = keyframes`
    from {
      transform: rotate(45deg);
    }
    to {
      transform: rotate(0deg);
    }
  `;

    return(
      <StyledDiv onClick={props.toggleMenu} >
        <StyledSpan open={props.open} menuClicked={props.menuClicked}></StyledSpan>
        <StyledSpan open={props.open} menuClicked={props.menuClicked}></StyledSpan>
        <StyledSpan open={props.open} menuClicked={props.menuClicked}></StyledSpan>
      </StyledDiv>
    );
}

export default MenuButton;
