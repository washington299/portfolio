import React from 'react';
import { FaPencilRuler } from 'react-icons/fa';

import { skillsData } from 'utils/Data';
import Box from 'components/Box';

import { Title, ContentArea } from 'utils/Styles/Elements';
import { SkillsArea } from 'utils/Styles/skills-style';

const Skills = () => (
  <>
    <Title>
      Skills
      <FaPencilRuler />
    </Title>
    <ContentArea flexDirection="column">
      <SkillsArea>
        {skillsData.map(({ id, title, img, link }) => (
          <Box key={id} title={title} img={img} link={link} />
        ))}
      </SkillsArea>
      <hr />
    </ContentArea>
    {/* <Title>Studying</Title>
    <ContentArea>
      <SkillsArea>
        {studyData.map(({ id, title, img, link }) => (
          <Box key={id} title={title} img={img} link={link} />
        ))}
      </SkillsArea>
    </ContentArea> */}
  </>
);

export default Skills;
