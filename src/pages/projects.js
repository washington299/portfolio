import React from 'react';
import { MdLibraryBooks } from 'react-icons/md';

import Box from '../components/Box';

import Data from '../utils/Data';

import { Title, ContentArea } from '../utils/Styles/Elements';
import { ProjectsArea } from '../utils/Styles/projects-style';

const projects = () => (
  <>
    <Title>
      Projects
      <MdLibraryBooks />
    </Title>
    <ContentArea>
      <ProjectsArea>
        {Data.projectsData.map(({ id, title, img, link }) => (
          <Box key={id} title={title} img={img} link={link} />
        ))}
      </ProjectsArea>
    </ContentArea>
  </>
);

export default projects;
