import React from 'react';
import Link from 'next/link';
import {
  FaUser,
  FaStar,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';

import App from '../../src/components/App';
import Layout from '../../src/components/Layout';

import { Title, ContentArea } from '../../src/utils/Styles/Elements';
import { Avatar, Intro, Star, Stack, Tech, Article } from './styles';

const HomePage = () => (
  <App>
    <Layout title="Home">
      <Title>
        Myself
        <FaUser />
      </Title>
      <ContentArea flexDirection="column">
        <Avatar>
          <img src="assets/avatar-light.png" alt="avatar-light" />
        </Avatar>
        <Intro>
          Hey there, i&apos;m Washington a Junior Javascript developer.
        </Intro>
        <Star>
          <span />
          <FaStar />
          <span />
        </Star>
        <Stack>
          <Tech>
            <FaHtml5 />
            <span>Html 5</span>
          </Tech>
          <Tech>
            <FaCss3Alt />
            <span>Css 3</span>
          </Tech>
          <Tech>
            <FaReact />
            <span>ReactJs</span>
          </Tech>
          <Tech>
            <FaNodeJs />
            <span>NodeJs</span>
          </Tech>
        </Stack>
        <hr />
      </ContentArea>
      <Title>About me</Title>
      <ContentArea>
        <Article>
          I’m a young guy in love with programming, I’m a web JavaScript
          developer and i make responsive layouts, I’m currently studying the
          frontend framework ReactJs and NodeJs on the backend and I’m looking
          for an opportunity to work as a internship or a junior developer with
          these technologies. You can see my projects by
          <Link href="/projects">
            <a> clicking here</a>
          </Link>
        </Article>
      </ContentArea>
    </Layout>
  </App>
);

export default HomePage;
