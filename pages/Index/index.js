import React from 'react';
import Link from 'next/link';
import { FaStar, FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';

import Global from '../../src/components/SwitchProvider';
import Layout from '../../src/components/Layout';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';

import { PageStyle, Title, ContentArea } from '../../src/utils/globalStyles';
import Styles from './styles';

const HomePage = () => (
  <Global>
    <Layout title="Home">
      <PageStyle>
        <Header />
        <Styles>
          <Title>Myself</Title>
          <ContentArea flexDirection="column">
            <div className="home-img">
              <img src="assets/avatar-light.png" alt="avatar-light" />
            </div>
            <span className="home-introduction">
              Hey there, i&apos;m Washington a Junior Javascript developer.
            </span>
            <div className="home-star">
              <span />
              <FaStar />
              <span />
            </div>
            <div className="home-techs">
              <div className="tech">
                <FaHtml5 />
                <span>Html 5</span>
              </div>
              <div className="tech">
                <FaCss3Alt />
                <span>Css 3</span>
              </div>
              <div className="tech">
                <FaReact />
                <span>ReactJs</span>
              </div>
              <div className="tech">
                <FaNodeJs />
                <span>NodeJs</span>
              </div>
            </div>
            <hr />
          </ContentArea>
          <Title>About me</Title>
          <ContentArea>
            <article>
              I’m a young guy in love with programming, I’m a web JavaScript
              developer and i make responsive layouts, I’m currently studying
              the frontend framework ReactJs and NodeJs on the backend and I’m
              looking for an opportunity to work as a internship or a junior
              developer with these technologies. You can see my projects by
              <Link href="/projects">
                <a> clicking here</a>
              </Link>
            </article>
          </ContentArea>
        </Styles>
        <Footer />
      </PageStyle>
    </Layout>
  </Global>
);

export default HomePage;
