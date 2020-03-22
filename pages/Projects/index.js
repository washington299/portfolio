import React from 'react';

import Layout from '../../src/components/Layout';
import Header from '../../src/components/Header';

import { PageStyle } from '../../src/components/utils/globalStyles';

const projects = () => (
  <Layout title="Projects">
    <PageStyle>
      <Header />
      <div>Projects Page</div>
    </PageStyle>
  </Layout>
);

export default projects;
