import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import Sidebar from '../src/components/Sidebar';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

import light from '../src/utils/Themes/light';
import dark from '../src/utils/Themes/dark';

import SidebarProvider from '../src/utils/Contexts/menuContext';
import useStorageTheme from '../src/utils/useStorageTheme';

import GlobalStyle from '../src/utils/Styles/Global';
import { PagePosition } from '../src/utils/Styles/Elements';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useStorageTheme('theme', light);

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
        <>
          <SidebarProvider>
            <Sidebar />
            <PagePosition>
              <Header toggleTheme={toggleTheme} />
              <Component {...pageProps} />
              <Footer />
            </PagePosition>
          </SidebarProvider>
        </>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
