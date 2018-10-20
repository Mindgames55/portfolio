import React from 'react';
import styled from 'styled-components';
import { Html5, Css3, Js, ReactLogo, Git, Gulp, Sass} from 'styled-icons/fa-brands';
import jQuery from './img/jquery.svg';
import Bootstrap from './img/bs.svg';



const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  color: #EDF2F4;

  :nth-child(1){
    background: #2B2D42;
  }
  :nth-child(2){
    background: #EDF2F4;
    color:  grey;
  }
  :nth-child(3){
    background #8D99AE;
  }

  p:nth-child(1) {
    grid-column: 1/-1;
  }

  img {
    filter: grayscale(100%);
  }
`;

const content = [
  [
    <p key='name'><strong>Languages</strong></p>,
    <Html5 size='30' key='html'/>,
    <Css3 size='30' key='css'/>,
    <Js size='30' key='js'/>,
    <p key='htmlp'> Html </p>,
    <p key='cssp'> Css </p>,
    <p key='jsp'> JavaScript </p>
  ],
  [
    <p key='name'><strong>Libraries</strong></p>,
  <ReactLogo size='30' key='react'/>,
  <img src={jQuery} alt='' key='jqiery' style={{width: '30px', height:'30px'}}/>,
  <img src={Bootstrap} alt='' key='bs' style={{width: '30px', height:'30px'}}/>,
  <p key='reactp'> React </p>,
  <p key='jQuery'> jQuery </p>,
  <p key='bsp'> Bootstrap </p>
],
  [
    <p key='name'><strong>Other Technologies</strong></p>,
  <Git size='30' key='git'/>,
  <Gulp size='30' key='gulp'/>,
  <Sass size='30' key='sass'/>,
  <p key='gitp'> Git </p>,
  <p key='gulpp'> Gulp </p>,
  <p key='sassp'> Sass </p>
  ]
]


const Skills = () => {
  return (
    <div style={{display: 'grid', gridTemplateRows: 'repeat(3, 1fr)'}}>
      {content.map((el, index) => <StyledDiv  key={index}>{el}</StyledDiv>)}
    </div>
  );
}

export default Skills;
