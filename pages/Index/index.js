import React from 'react';

import Layout from '../../src/components/Layout';
import Header from '../../src/components/Header';

import { PageStyle } from '../../src/components/utils/globalStyles';

const HomePage = () => (
  <Layout title="Home">
    <PageStyle>
      <Header />
      <div>Home Page</div>
    </PageStyle>
  </Layout>
);

export default HomePage;
