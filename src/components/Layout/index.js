import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ title = 'Washington Campos', children }) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="favicon.ico" />
      <title>{title}</title>
    </Head>
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
  </div>
);

export default Layout;
