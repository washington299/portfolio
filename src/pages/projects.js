import React from 'react';
import { MdLibraryBooks } from 'react-icons/md';

import { projectsData } from 'utils/Data';

import Box from 'components/Box';

import { Title, ContentArea } from 'utils/Styles/Elements';
import { ProjectsArea } from 'utils/Styles/projects-style';

const Projects = () => (
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

export default Projects;
