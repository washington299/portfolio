import React from 'react';
import { FaPencilRuler } from 'react-icons/fa';

import Box from '../../src/components/Box';

import Data from '../../src/utils/Data';

import { Title, ContentArea } from '../../src/utils/Styles/Elements';
import { SkillsArea } from './styles';

const Skills = () => (
  <>
    <Title>
      Skills
      <FaPencilRuler />
    </Title>
    <ContentArea flexDirection="column">
      <SkillsArea>
        {Data.skillsData.map(({ id, title, img, link }) => (
          <Box key={id} title={title} img={img} link={link} />
        ))}
      </SkillsArea>
      <hr />
    </ContentArea>
    <Title>Studying</Title>
    <ContentArea>
      <SkillsArea>
        {Data.studyData.map(({ id, title, img, link }) => (
          <Box key={id} title={title} img={img} link={link} />
        ))}
      </SkillsArea>
    </ContentArea>
  </>
);

export default Skills;
