import React from 'react';
import { FaGithub } from 'react-icons/fa';

import { BoxStyle, Link, BoxArea, BoxInfo, BoxTitle } from './styles';

const Box = ({ title, img, link }) => (
  <BoxStyle>
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <BoxArea className="box__background">
        <BoxInfo className="box-info">
          <img src={img} alt={title} />
          <BoxTitle className="box-span-area">
            <span className="box-title">{title}</span>
            <FaGithub />
          </BoxTitle>
        </BoxInfo>
      </BoxArea>
    </Link>
  </BoxStyle>
);

export default Box;
