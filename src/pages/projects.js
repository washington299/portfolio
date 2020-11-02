import React from 'react';
import axios from 'axios';
import { MdLibraryBooks } from 'react-icons/md';

import Box from 'components/Box';

import { Title, ContentArea } from 'utils/Styles/Elements';
import { ProjectsArea } from 'utils/Styles/projects-style';

const Projects = ({ projects }) => (
  <>
    <Title>
      Projects
      <MdLibraryBooks />
    </Title>
    <ContentArea>
      <ProjectsArea>
        {projects.map(({ id, title, img, link }) => (
          <Box key={id} title={title} img={img} link={link} />
        ))}
      </ProjectsArea>
    </ContentArea>
  </>
);

export const getStaticProps = async () => {
  const res = await axios.get('http://localhost:3000/api/data', {
    data: { data: 'projects' },
  });
  const projects = res.data;

  return { props: { projects } };
};

export default Projects;
