import React from 'react';
import { FaPencilRuler } from 'react-icons/fa';

import Global from '../../src/components/App';
import Layout from '../../src/components/Layout';
import Box from '../../src/components/Box';

import Data from '../../src/utils/Data';

import { Title, ContentArea } from '../../src/utils/Styles/Elements';
import Styles from './styles';

const Skills = () => (
  <Global>
    <Layout title="Skills">
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
    </Layout>
  </Global>
);

export default Skills;
