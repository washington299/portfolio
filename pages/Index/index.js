import React from 'react';

import Global from '../../src/components/GlobalStyleMode';
import Layout from '../../src/components/Layout';
import Header from '../../src/components/Header';

import { PageStyle } from '../../src/utils/globalStyles';

const HomePage = () => (
  <Global>
    <Layout title="Home">
      <PageStyle>
        <Header />
        <div>Home Page</div>
      </PageStyle>
    </Layout>
  </Global>
);

export default HomePage;
