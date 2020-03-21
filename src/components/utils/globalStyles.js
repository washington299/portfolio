/* eslint-disable prettier/prettier */
import { createGlobalStyle } from 'styled-components';
import { defaultBackground, defaultFont } from './themes';

export default createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-shadow: border-box;
  }
  body {
    background-color: ${defaultBackground};
    color: ${defaultFont};
    font-family: 'Roboto', sans-serif;
  }
`;
