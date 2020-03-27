import React from 'react';

import Global from '../../src/components/SwitchProvider';
import Layout from '../../src/components/Layout';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';

import Data from '../../src/utils/projectData';

import { PageStyle, Title, ContentArea } from '../../src/utils/globalStyles';
import Styles from './styles';

const Skills = () => (
  <Global>
    <Layout title="Skills">
      <PageStyle>
        <Header />
        <Styles>
          <Title>Skills</Title>
          <ContentArea flexDirection="column">
            <div className="skills-area">
              {Data.skillsData.map(({ id, title, img }) => (
                <div className="skills-box" key={id}>
                  <div className="skills-box__background">
                    <div className="skills-info">
                      <img src={img} alt={title} />
                      <span className="skills-title">{title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <hr />
          </ContentArea>
          <Title>Studying</Title>
          <ContentArea>
            <div className="skills-area">
              {Data.studyData.map(({ id, title, img }) => (
                <div className="skills-box" key={id}>
                  <div className="skills-box__background">
                    <div className="skills-info">
                      <img src={img} alt={title} />
                      <span className="skills-title">{title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ContentArea>
        </Styles>
        <Footer />
      </PageStyle>
    </Layout>
  </Global>
);

export default Skills;
