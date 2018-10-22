import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {Home, Code} from 'styled-icons/material';
import {LaptopCode} from 'styled-icons/fa-solid/LaptopCode';
import {User} from 'styled-icons/fa-solid/User';
import posed from 'react-pose';
import Footer from './Footer.js';

let menuLinks = [
  'home',
  'about',
  'skills',
  'projects'
];

let icons = [
  <Home size='30'/>,
  <User size='30'/>,
  <Code size='30'/>,
  <LaptopCode size='30'/>
]

const StyledMenu = styled(posed.div({
  open: {y: 0, staggerChildren: 100},
  close: {y: '-100%'}
}))`
  grid-row: 2/4;
  display: grid
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr 130px;
  align-self: center;
  justify-items: center;
  height: calc(100vh - 140px);
  background: #EDF2F4;
  padding-top: 50px;

  @media screen and (orientation: landscape){
    grid-row: 1/2;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    height: 100%;
    align-items: start;
    padding-top: 10px;
  }

  @media screen and (min-width: 700px){
    grid-row: 1/2;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    height: 100%;
    align-items: center !important;
    padding: 0 !important;
  }

  @media screen and (min-width: 1400px){
    grid-column: 1/2;
    grid-template-columns: 100%;
    grid-template-rows: repeat(4, 1fr);
  }
`;

const StyledLink = styled(Link)`
  color: #EDF2F4;
  background: #2B2D42;
  width: 70px;
  height: 70px;
  text-decoration: none;
  border-radius: 50%;
  position: relative;
  justify-items: center;
  display: grid;
  align-items: center;

  p{
    position: absolute;
    top: 110%;
    z-index: 1000;
    margin: 0;
    color: black;
  }
`;

const Menu = (props) =>
        <StyledMenu initialPose='close' pose='open'>
            {menuLinks.map((link, index) =>    <StyledLink key={index} link={link} onClick={props.toggleMenu} theme={props.theme} to={(link === 'home')?'/':link}>
                                                  {icons[index]}
                                                  <p>{link}</p>
                                                </StyledLink>
                                            )}
          {(props.includeFooter) && <Footer foreground="white" background="black"/>}

        </StyledMenu>
export default Menu
