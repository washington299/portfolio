import React from 'react';

import Global from '../../src/components/SwitchProvider';
import Layout from '../../src/components/Layout';
import Header from '../../src/components/Header';

import { PageStyle, Title, ContentArea } from '../../src/utils/globalStyles';

const Skills = () => (
  <Global>
    <Layout title="Skills">
      <PageStyle>
        <Header />
        <ContentArea>
          <Title>Skills</Title>
        </ContentArea>
      </PageStyle>
    </Layout>
  </Global>
);

export default Skills;
