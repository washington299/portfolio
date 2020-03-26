/* eslint-disable prettier/prettier */
import styled, { createGlobalStyle } from 'styled-components';
import { defaultBackground, defaultFont, SecondFont, secondBackground } from './themes';

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

    hr {
      width: 100%;
      margin: 30px 0;
    }
  }
`;

export const PageStyle = styled.div`
  flex: 1;
  margin-left: 250px;

  @media only screen and (max-width: 700px) {
    margin-left: 0;
  }
`;

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;

  @media only screen and (max-width: 700px) {
    justify-content: space-between;
  }
`;

export const Title = styled.span`
  display: inline-block;
  color: ${SecondFont};
  font-size: 26px;
  border-bottom: 5px solid ${SecondFont};
  padding-bottom: 5px;
  margin: 30px 50px;

  @media only screen and (max-width: 700px) {
    text-align: center;
  }
`;

export const ContentArea = styled.section`
  padding: 0 30px;
  display: flex;
  flex-direction: ${(props => props.flexDirection || 'row')};
  align-items: center;

  @media only screen and (max-width: 700px) {
    padding: 0 10px;
  }
`;

export const FooterStyle = styled.footer`
  height: 50px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${secondBackground};
`;
