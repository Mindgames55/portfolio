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
  grid-template-rows: 1fr 130px;
  justify-self: center;
  align-self: center;
  grid-gap: 70px;
  height: calc(100vh - 100px);
`;

const StyledLink = styled(Link)`
  color: white;
  background: black;
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
          <Footer foreground="white" background="black"/>

        </StyledMenu>
export default Menu
