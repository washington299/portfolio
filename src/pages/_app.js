import Head from 'next/head';
import React from 'react';
import useDarkMode from 'use-dark-mode';
import { ThemeProvider } from 'styled-components';

import Sidebar from 'components/Sidebar';
import Header from 'components/Header';
import Footer from 'components/Footer';

import light from 'utils/Themes/light';
import dark from 'utils/Themes/dark';

import SidebarProvider from 'utils/Contexts/menuContext';

import GlobalStyle from 'utils/Styles/Global';
import { GridArea, PagePosition } from 'utils/Styles/Elements';

function MyApp({ Component, pageProps }) {
  const darkMode = useDarkMode(false);

  return (
    <>
      <Head>
        <title>Portfólio</title>
      </Head>
      <ThemeProvider theme={darkMode.value ? dark : light}>
        <GlobalStyle />
        <SidebarProvider>
          <GridArea>
            <Sidebar />
            <PagePosition>
              <Header toggleTheme={darkMode.toggle} checked={darkMode.value} />
              <Component {...pageProps} />
              <Footer />
            </PagePosition>
          </GridArea>
        </SidebarProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
