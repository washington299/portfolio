import React from 'react';
import { FaPencilRuler } from 'react-icons/fa';

import Global from '../../src/components/SwitchProvider';
import Layout from '../../src/components/Layout';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';

import Data from '../../src/utils/projectData';

import { PagePosition, Title, ContentArea } from '../../src/utils/globalStyles';
import Styles from './styles';
import Box from '../../src/components/Box';

const Skills = () => (
  <Global>
    <Layout title="Skills">
      <PagePosition>
        <Header />
        <Title>
          Skills
          <FaPencilRuler />
        </Title>
        <Styles>
          <ContentArea flexDirection="column">
            <div className="skills-area">
              {Data.skillsData.map(({ id, title, img, link }) => (
                <Box key={id} title={title} img={img} link={link} />
              ))}
            </div>
            <hr />
          </ContentArea>
          <Title>Studying</Title>
          <ContentArea>
            <div className="skills-area">
              {Data.studyData.map(({ id, title, img, link }) => (
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

export default Skills;
