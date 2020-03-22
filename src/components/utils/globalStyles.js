/* eslint-disable prettier/prettier */
import styled, { createGlobalStyle } from 'styled-components';
import { defaultBackground, secondBackground, defaultFont } from './themes';

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

export const PageStyle = styled.div`
  flex: 1;
`;

export const Header = styled.header`
  height: 50px;

  @media only screen and (max-width: 700px) {
    display: flex;
    background-color: ${secondBackground};
  }
`;
