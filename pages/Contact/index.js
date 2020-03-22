import React from 'react';

import Layout from '../../src/components/Layout';
import Header from '../../src/components/Header';

import { PageStyle } from '../../src/utils/globalStyles';

const Contact = () => (
  <Layout title="Contact me">
    <PageStyle>
      <Header />
      <div>Contact Page</div>
    </PageStyle>
  </Layout>
);

export default Contact;
