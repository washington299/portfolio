import React from 'react';

import Global from '../../src/components/GlobalStyleMode';
import Layout from '../../src/components/Layout';
import Header from '../../src/components/Header';

import { PageStyle, Title, ContentArea } from '../../src/utils/globalStyles';

const HomePage = () => (
  <Global>
    <Layout title="Home">
      <PageStyle>
        <Header />
        <ContentArea>
          <Title>Myself</Title>
        </ContentArea>
      </PageStyle>
    </Layout>
  </Global>
);

export default HomePage;
