import React from 'react';

import Global from '../../src/components/GlobalStyleMode';
import Layout from '../../src/components/Layout';
import Header from '../../src/components/Header';

import { PageStyle } from '../../src/utils/globalStyles';

const Skills = () => (
  <Global>
    <Layout title="Skills">
      <PageStyle>
        <Header />
        <div>Skills Page</div>
      </PageStyle>
    </Layout>
  </Global>
);

export default Skills;
