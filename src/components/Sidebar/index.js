import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

import Navbar from './styles';

const Sidebar = () => (
  <Navbar>
    <div className="avatar-img">
      <img src="/assets/avatar-light.png" alt="avatar-light.png" />
    </div>
    <ul>
      <li>
        <Link href="/">
          <a>HOME</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>PROJECTS</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>SKILLS</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>CONTACT</a>
        </Link>
      </li>
    </ul>
    <div className="social-media-icons">
      <a
        href="https://www.instagram.com/washington_campos9/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/washington-campos-741771162/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/washington299"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  </Navbar>
);

export default Sidebar;
