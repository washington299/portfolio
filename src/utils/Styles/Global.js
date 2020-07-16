import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  body {
    font-family: 'Roboto', sans-serif;
    background-color: var(--background-primary);
    color: var(--font-primary);

    hr {
      width: 100%;
      margin: 30px 0;
    }

    .active {
      background-color: var(--background-primary);
      border-left: 6px solid var(--font-secondary);
    }
    .line {
      background-color: var(--font-primary);
    }
    .line-mm {
      background-color: var(--font-secondary);;
    }
  }

  :root {
    --background-primary: ${({ theme }) => theme.colors.background.primary};
    --background-secondary: ${({ theme }) => theme.colors.background.secondary};
    --background-tertiary: ${({ theme }) => theme.colors.background.tertiary};

    --font-primary: ${({ theme }) => theme.colors.font.primary};
    --font-secondary: ${({ theme }) => theme.colors.font.secondary};
  }
`;
