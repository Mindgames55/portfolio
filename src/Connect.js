import React from 'react';
import styled from 'styled-components';
import {FacebookF, GithubAlt, LinkedinIn} from 'styled-icons/fa-brands';
import {Email} from 'styled-icons/material';

const StyledConnect = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  justify-items: center;
  grid-row: -2/-1;
`;

export default class Connect extends React.Component{
  render(){
    return(
      <StyledConnect theme={this.props.theme}>
        <GithubAlt size="50"/>
        <LinkedinIn size="50"/>
        <FacebookF size="50"/>
        <Email size="50"/>
      </StyledConnect>
    );
  }
}
