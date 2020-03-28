import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { ThemeProvider } from 'styled-components';

import Sidebar from '../Sidebar';
import Header from '../Header';
import Footer from '../Footer';
import { useTheme } from '../../utils/Contexts/switchContext';

import GlobalStyle from '../../utils/Global/GlobalStyle';
import { PagePosition } from '../../utils/Global/GlobalStyleComponents';
import LayoutStyle from './styles';

const Layout = ({ title, children }) => {
  const router = useRouter();
  const { colorTheme } = useTheme();

  useEffect(() => {
    Cookies.set('mode', colorTheme, { expires: 1 });
  }, [colorTheme]);

  return (
    <ThemeProvider theme={{ mode: colorTheme }}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <title>{`Washington Campos - ${title}`}</title>
      </Head>
      <GlobalStyle />
      <LayoutStyle>
        <Sidebar path={router.pathname} />
        <PagePosition>
          <Header />
          {children}
          <Footer />
        </PagePosition>
      </LayoutStyle>
    </ThemeProvider>
  );
};

export default Layout;
