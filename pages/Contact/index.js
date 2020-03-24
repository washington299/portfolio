import React from 'react';

import Global from '../../src/components/GlobalStyleMode';
import Layout from '../../src/components/Layout';
import Header from '../../src/components/Header';

import { PageStyle, Title, ContentArea } from '../../src/utils/globalStyles';

const Contact = () => (
  <Global>
    <Layout title="Contact me">
      <PageStyle>
        <Header />
        <ContentArea>
          <Title>Contact</Title>
        </ContentArea>
      </PageStyle>
    </Layout>
  </Global>
);

export default Contact;
