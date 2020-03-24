import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';

import useStorage from '../helpers/useStorage';
import Sidebar from '../Sidebar';
import SidebarProvider from '../../utils/menuContext';

import GlobalStyles from '../../utils/globalStyles';
import App from './styles';

const Layout = ({ title, children }) => {
  const router = useRouter();
  const theme = useStorage();

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
        <title>{`Washington Campos - ${title}`}</title>
      </Head>
      <SidebarProvider>
        <ThemeProvider theme={{ mode: theme }}>
          <GlobalStyles />
          <App>
            <Sidebar path={router.pathname} />
            {children}
          </App>
        </ThemeProvider>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
