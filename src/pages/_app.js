import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { ThemeProvider } from 'styled-components';

import { parseCookies } from '../utils/parseCookies';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

import light from '../utils/Themes/light';
import dark from '../utils/Themes/dark';

import SidebarProvider from '../utils/Contexts/menuContext';

import GlobalStyle from '../utils/Styles/Global';
import { PagePosition } from '../utils/Styles/Elements';

function MyApp({ Component, pageProps, storagedDarkMode = false }) {
  const [darkMode, setDarkMode] = useState(() => JSON.parse(storagedDarkMode));

  useEffect(() => {
    Cookies.set('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <Head>
        <title>Portfólio</title>
      </Head>
      <ThemeProvider theme={darkMode ? dark : light}>
        <>
          <GlobalStyle />
          <SidebarProvider>
            <Sidebar />
            <PagePosition>
              <Header toggleTheme={toggleTheme} checked={darkMode} />
              <Component {...pageProps} />
              <Footer />
            </PagePosition>
          </SidebarProvider>
        </>
      </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = ({ ctx }) => {
  const cookies = parseCookies(ctx.req);

  return { storagedDarkMode: cookies.darkMode };
};

export default MyApp;
