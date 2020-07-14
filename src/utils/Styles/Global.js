import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-shadow: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.font.primary};

    .active {
      background-color: ${({ theme }) => theme.colors.background.primary};
      border-left: 6px solid ${({ theme }) => theme.colors.font.secondary};
    }

    .sidebar, .footer {
      background-color: ${({ theme }) => theme.colors.background.secondary};
    }

    .color-text {
      color: ${({ theme }) => theme.colors.font.primary};
    }

    .menu-item {
      a {
        color: ${({ theme }) => theme.colors.font.secondary};
        text-decoration: none;
      }
      &:hover {
        background-color: ${({ theme }) => theme.colors.background.primary};
      }
    }
    .icons svg {
      color: ${({ theme }) => theme.colors.font.secondary};
    }

    .title {
      color: ${({ theme }) => theme.colors.font.secondary};
      border-bottom: 4px solid ${({ theme }) => theme.colors.font.secondary};
    }
    .line {
      background-color: ${({ theme }) => theme.colors.font.primary};
    }
    .line-mm {
      background-color: ${({ theme }) => theme.colors.font.secondary};
    }

    hr {
      width: 100%;
      margin: 30px 0;
    }
  }
`;
