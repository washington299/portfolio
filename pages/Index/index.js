import React from 'react';

import Layout from '../../src/components/Layout';

import { PageStyle, Header } from '../../src/components/utils/globalStyles';
import MenuMobile from './styles';

const HomePage = () => (
  <Layout title="Home">
    <PageStyle>
      <Header>
        <MenuMobile>
          <span />
          <span />
          <span />
        </MenuMobile>
      </Header>
      <div>Home Page</div>
    </PageStyle>
  </Layout>
);

export default HomePage;
