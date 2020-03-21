import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../utils/globalStyles';

const Layout = ({ title = 'Washington Campos', children }) => {
  const [theme, setTheme] = useState({ mode: 'light' });
  console.log(setTheme);

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <title>{title}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <nav>
          <Link href="/">
            <a>HOME</a>
          </Link>
          <Link href="/">
            <a>PROJECTS</a>
          </Link>
          <Link href="/">
            <a>SKILLS</a>
          </Link>
          <Link href="/">
            <a>CONTACT</a>
          </Link>
        </nav>
        {children}
      </ThemeProvider>
    </div>
  );
};

export default Layout;
