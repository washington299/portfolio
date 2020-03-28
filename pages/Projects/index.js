import React from 'react';
import { MdLibraryBooks } from 'react-icons/md';

import Global from '../../src/components/App';
import Layout from '../../src/components/Layout';
import Box from '../../src/components/Box';

import Data from '../../src/utils/projectData';

import {
  Title,
  ContentArea,
} from '../../src/utils/Global/GlobalStyleComponents';
import Styles from './styles';

const projects = () => (
  <Global>
    <Layout title="Projects">
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
    </Layout>
  </Global>
);

export default projects;
