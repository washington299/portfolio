import React from 'react';

import Global from '../../src/components/GlobalStyleMode';
import Layout from '../../src/components/Layout';
import Header from '../../src/components/Header';

import { PageStyle } from '../../src/utils/globalStyles';

const projects = () => (
  <Global>
    <Layout title="Projects">
      <PageStyle>
        <Header />
        <div>Projects Page</div>
      </PageStyle>
    </Layout>
  </Global>
);

export default projects;
