import React from 'react';
import axios from 'axios';
import { FaPencilRuler } from 'react-icons/fa';

import Box from '../components/Box';

import { Title, ContentArea } from '../utils/Styles/Elements';
import { SkillsArea } from '../utils/Styles/skills-style';

const Skills = ({ skillsData, studyData }) => (
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
    <Title>Studying</Title>
    <ContentArea>
      <SkillsArea>
        {studyData.map(({ id, title, img, link }) => (
          <Box key={id} title={title} img={img} link={link} />
        ))}
      </SkillsArea>
    </ContentArea>
  </>
);

export const getStaticProps = async () => {
  const skillsData = axios.get('http://localhost:3000/api/skills');
  const studyData = axios.get('http://localhost:3000/api/study');
  const [skills, study] = await Promise.all([skillsData, studyData]);

  return {
    props: {
      skillsData: skills.data,
      studyData: study.data,
    },
  };
};

export default Skills;
