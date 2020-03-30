import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-shadow: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.font.primary};
    font-family: 'Roboto', sans-serif;

    hr {
      width: 100%;
      margin: 30px 0;
    }
  }
`;
