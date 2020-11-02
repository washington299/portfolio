import React from 'react';
import axios from 'axios';
import { FaPencilRuler } from 'react-icons/fa';

import Box from 'components/Box';

import { Title, ContentArea } from 'utils/Styles/Elements';
import { SkillsArea } from 'utils/Styles/skills-style';

const Skills = ({ skills }) => (
  <>
    <Title>
      Skills
      <FaPencilRuler />
    </Title>
    <ContentArea flexDirection="column">
      <SkillsArea>
        {skills.map(({ id, title, img, link }) => (
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

export const getStaticProps = async () => {
  const res = await axios.get('http://localhost:3000/api/data', {
    data: { data: 'skills' },
  });
  const skills = res.data;

  return { props: { skills } };
};

export default Skills;
