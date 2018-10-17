import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const StyledInfoDiv = styled(posed.div({
  open: {opacity: 1},
  closed: {opacity: 0}
}))`
  background: black;
  grid-row: 4/5;
  z-index: 1000;
  grid-column: 1/-1;
  align-self: stretch;
  color: white;
`;

const InfoDiv = (props) => {
  return (
    <StyledInfoDiv pose={props.pose}>
      <ul>
      {props.children}
      </ul>
    </StyledInfoDiv>
  );
}

export default InfoDiv;
