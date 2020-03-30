import Head from 'next/head';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Sidebar from '../src/components/Sidebar';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

import light from '../src/utils/Themes/light';
import dark from '../src/utils/Themes/dark';

import GlobalStyle from '../src/utils/Styles/Global';
import { PagePosition } from '../src/utils/Styles/Elements';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(light);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <>
      <Head>
        <title>Portfólio</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>
          <Sidebar />
          <PagePosition>
            <Header toggleTheme={toggleTheme} />
            <Component {...pageProps} />
            <Footer />
          </PagePosition>
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
