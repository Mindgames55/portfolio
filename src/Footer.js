import React from 'react';
import styled from 'styled-components';
import {Facebook, Github, Linkedin, Mail} from 'styled-icons/feather';
import posed from 'react-pose'

const StyledConnect = styled(posed.div({
  open: {y: 0, opacity: 1, transition: {delay: 200}},
  close: {y: '100%', opacity: 0},
  closed: {y: '100%', opacity: 0}
}))`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  grid-column: 1/-1;
  align-items: center;
`;

function Footer(props) {

  console.log(props);
    return(
      <StyledConnect props={props}>
        <p>Lets connect </p>
        <div>
          <Github size="30"/>
          <Linkedin size="30"/>
          <Facebook size="30"/>
          <Mail size="30"/>
        </div>
        <p><small>2018 &copy; Mayguen Ojeda </small></p>
      </StyledConnect>
    );
}

export default Footer;
