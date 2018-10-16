
import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url(‘https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');

  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    color: #3d3d3d;
    background: #f6f6f6;
  }

  h1 {
    font-family: Montserrat;
  }
`
  export const theme = {
    primary: '#57a0ff',
    primaryLight: '#91d1ff',
    primaryDark: '#0072cb',
    secondary: '#e57373',
    secondaryLight: '#ffa4a2',
    secondaryDark: '#af4448'
  }
