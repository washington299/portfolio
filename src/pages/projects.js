import React from 'react';
import axios from 'axios';
import { MdLibraryBooks } from 'react-icons/md';

import Box from '../components/Box';

import { Title, ContentArea } from '../utils/Styles/Elements';
import { ProjectsArea } from '../utils/Styles/projects-style';

const projects = ({ projectsData }) => (
  <>
    <Title>
      Projects
      <MdLibraryBooks />
    </Title>
    <ContentArea>
      <ProjectsArea>
        {projectsData.map(({ id, title, img, link }) => (
          <Box key={id} title={title} img={img} link={link} />
        ))}
      </ProjectsArea>
    </ContentArea>
  </>
);

export const getStaticProps = async () => {
  const { data } = await axios.get(`${process.env.SITE_URL}/projects`);
  const projectsData = data;
  return { props: { projectsData } };
};

export default projects;
