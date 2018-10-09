import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {Home, Code} from 'styled-icons/material';
import {LaptopCode} from 'styled-icons/fa-solid/LaptopCode';
import {User} from 'styled-icons/fa-solid/User';


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

const StyledLink = styled(Link)`
  background-color: #000;
  opacity: 0.5;
  color: white;
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

class MenuComp extends React.Component {
  render(){
    return (
      <React.Fragment>
        {menuLinks.map((link, index) => <StyledLink key={index} to={`/${link}`}>
                                          {icons[index]}
                                          <p>{link}</p>
                                        </StyledLink>)}
      </React.Fragment>
    );
  }

}

export default MenuComp
