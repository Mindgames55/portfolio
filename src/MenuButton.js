import React from 'react';
import styled from 'styled-components';

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

  span {
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    background: #d3531a;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
    transform-origin: left center;
  }

  span:nth-child(1) {
    top: ${props => (props.open)?'-3p':'0px'};
    transform: ${props => (props.open)?'rotate(45deg)':'inherit'};
    left: ${props => (props.open)?'8px':''};

  }

  span:nth-child(2) {
    top: 18px;
    width: ${props => (props.open)?'0':''};
    opacity: ${props => (props.open)?'0':''};
  }

  span:nth-child(3) {
    top: ${props => (props.open)?'39px':'36px'};
    transform: ${props => (props.open)?'rotate(-45deg)':''};
    left: ${props => (props.open)?'8px':''};
  }
  `;

    return(
      <StyledDiv onClick={props.toggleMenu} open={props.open}>
        <span></span>
        <span></span>
        <span></span>
      </StyledDiv>
    );
}

export default MenuButton;
