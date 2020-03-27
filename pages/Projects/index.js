import React from 'react';
import { MdLibraryBooks } from 'react-icons/md';

import Global from '../../src/components/SwitchProvider';
import Layout from '../../src/components/Layout';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import Box from '../../src/components/Box';

import Data from '../../src/utils/projectData';

import { PagePosition, Title, ContentArea } from '../../src/utils/globalStyles';
import Styles from './styles';

const projects = () => (
  <Global>
    <Layout title="Projects">
      <PagePosition>
        <Header />
        <Title>
          Projects
          <MdLibraryBooks />
        </Title>
        <Styles>
          <ContentArea>
            <div className="project-area">
              {Data.projectsData.map(({ id, title, img, link }) => (
                <Box key={id} title={title} img={img} link={link} />
              ))}
            </div>
          </ContentArea>
        </Styles>
        <Footer />
      </PagePosition>
    </Layout>
  </Global>
);

export default projects;
