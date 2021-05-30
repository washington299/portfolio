import React from 'react';
import Link from 'next/link';

import { Title, ContentArea } from 'utils/Styles/Elements';

import {
  UserIcon,
  StarIcon,
  Html5Icon,
  Css3Icon,
  JavascriptIcon,
  ReactIcon,
  TypescriptIcon,
  NextjsIcon,
  AboutIcon,
} from 'styles/icons';
import { Intro, Draw, Line, Stack, Tech, Article } from 'styles/index-style';

const HomePage = () => (
  <>
    <Title>
      Myself
      <UserIcon />
    </Title>
    <ContentArea flexDirection="column">
      <div>
        <img src="assets/avatar-light.png" alt="avatar-light" />
      </div>
      <Intro>Hey there, i&apos;m Washington a Front-end developer.</Intro>
      <Draw>
        <Line />
        <StarIcon />
        <Line />
      </Draw>
      <Stack>
        <Tech>
          <Html5Icon />
          <span>Html 5</span>
        </Tech>
        <Tech>
          <Css3Icon />
          <span>Css 3</span>
        </Tech>
        <Tech>
          <JavascriptIcon />
          <span>Javascript</span>
        </Tech>
        <Tech>
          <ReactIcon />
          <span>ReactJs</span>
        </Tech>
        <Tech>
          <TypescriptIcon />
          <span>Typescript</span>
        </Tech>
        <Tech>
          <NextjsIcon />
          <span>NextJs</span>
        </Tech>
      </Stack>
      <hr />
    </ContentArea>
    <Title>
      About me
      <AboutIcon />
    </Title>
    <ContentArea>
      <Article>
        I’m a young guy in love with programming, I’m a Front-end developer with
        a little experience in back-end development, i make responsive layouts,
        and i always try to write the best code as possible, always folowing the
        best standards and make the other developers easier. In my free time i
        love learning new things and work with other developers that has the
        same porpouse as me, i also have a couple of projects here in my
        portfolio you can see them by
        <Link href="/projects">
          <a> clicking here.</a>
        </Link>
      </Article>
    </ContentArea>
  </>
);

export default HomePage;
