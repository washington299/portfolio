import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdLibraryBooks } from 'react-icons/md';

import Global from '../../src/components/SwitchProvider';
import Layout from '../../src/components/Layout';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';

import Data from '../../src/utils/projectData';

import { PagePosition, Title, ContentArea } from '../../src/utils/globalStyles';
import Styles from './styles';

const projects = () => (
  <Global>
    <Layout title="Projects">
      <PagePosition>
        <Header />
        <Title>
          Projects
          <MdLibraryBooks />
        </Title>
        <Styles>
          <ContentArea>
            <div className="project-area">
              {Data.projectsData.map(({ id, title, img, link }) => (
                <div className="project-box" key={id}>
                  <a
                    className="project-link"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="project-box__background">
                      <div className="project-info">
                        <img src={img} alt={title} />
                        <div className="project-span-area">
                          <span className="project-title">{title}</span>
                          <FaGithub />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </ContentArea>
        </Styles>
        <Footer />
      </PagePosition>
    </Layout>
  </Global>
);

export default projects;
