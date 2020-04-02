import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { ThemeProvider } from 'styled-components';

import { parseCookies } from '../src/utils/parseCookies';

import Sidebar from '../src/components/Sidebar';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

import light from '../src/utils/Themes/light';
import dark from '../src/utils/Themes/dark';

import SidebarProvider from '../src/utils/Contexts/menuContext';

import GlobalStyle from '../src/utils/Styles/Global';
import { PagePosition } from '../src/utils/Styles/Elements';

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

export async function getServerSideProps({ req }) {
  const cookies = parseCookies(req);

  return {
    props: { storagedDarkMode: cookies.darkMode },
  };
}

export default MyApp;
