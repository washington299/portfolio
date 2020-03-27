import React from 'react';
import { FaGithub } from 'react-icons/fa';

import Styles from './styles';

const Box = ({ title, img, link }) => (
  <Styles>
    <a
      className="box-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="box__background">
        <div className="box-info">
          <img src={img} alt={title} />
          <div className="box-span-area">
            <span className="box-title">{title}</span>
            <FaGithub />
          </div>
        </div>
      </div>
    </a>
  </Styles>
);

export default Box;
