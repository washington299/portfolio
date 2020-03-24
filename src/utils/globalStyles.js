/* eslint-disable prettier/prettier */
import styled, { createGlobalStyle } from 'styled-components';
import { defaultBackground, defaultFont, SecondFont } from './themes';

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

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

export const Title = styled.span`
  color: ${SecondFont};
  font-size: 26px;
  border-bottom: 5px solid ${SecondFont};
  padding-bottom: 5px;
`;

export const ContentArea = styled.div`
  padding: 30px 50px;
`;
