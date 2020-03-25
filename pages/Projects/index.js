import React from 'react';

import Global from '../../src/components/SwitchProvider';
import Layout from '../../src/components/Layout';
import Header from '../../src/components/Header';

import { PageStyle, Title, ContentArea } from '../../src/utils/globalStyles';

const projects = () => (
  <Global>
    <Layout title="Projects">
      <PageStyle>
        <Header />
        <ContentArea>
          <Title>Projects</Title>
        </ContentArea>
      </PageStyle>
    </Layout>
  </Global>
);

export default projects;
