import React from 'react';
import styled from 'styled-components';
import {Facebook, Github, Linkedin, MessageSquare} from 'styled-icons/feather';
import {Email} from 'styled-icons/material';

const StyledConnect = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  justify-items: center;
  grid-row: -2/-1;
  align-self: stretch;
  align-items: center;
  border-top: solid 3px ${props => props.theme.secondaryDark};

  :nth-child(n) {
    color: ${props => props.theme.secondaryDark};
  }
`;

export default class Connect extends React.Component{
  render(){
    return(
      <StyledConnect theme={this.props.theme}>
        <Github size="50"/>
        <Linkedin size="50"/>
        <Facebook size="50"/>
        <MessageSquare size="50"/>
      </StyledConnect>
    );
  }
}
