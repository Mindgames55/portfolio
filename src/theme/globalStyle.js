
import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url(‘https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');

  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    color: #2B2D42;
    background: #F3F3F3;
    overflow-x: hidden;
    line-height: 1.5em;
  }

  h1 {
    font-family: Montserrat;
  }
`
  export const theme = {
    gunMetal: '#2B2D42',
    grayBlue: '#8D99AE',
    white: '#EDF2F4',
    lightRed: '#EF233C',
    candyRed: '#D90429'
  }
