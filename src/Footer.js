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
  background: #2B2D42;
  justify-self: stretch;

  a, p {
    text-decoration: none;
    color: #EDF2F4;
  }
`;

function Footer(props) {

  console.log(props);
    return(
      <StyledConnect props={props}>
        <p>Lets connect </p>
        <div>
          <a href='https://github.com/Mindgames55'><Github size="30"/> </a>
          <a href='https://www.linkedin.com/in/mayguen-ojeda'><Linkedin size="30"/> </a>
          <a href='mailto:mayguen.ojeda88@gmail.com'><Mail size="30"/> </a>
        </div>
        <p><small>2018 &copy; Mayguen Ojeda </small></p>
      </StyledConnect>
    );
}

export default Footer;
