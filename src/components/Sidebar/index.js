import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

import { useOpenSidebar } from '../../utils/menuContext';

import Navbar from './styles';

const Sidebar = ({ path }) => {
  const { openSidebar } = useOpenSidebar();

  return (
    <Navbar display={openSidebar ? 'block' : 'none'}>
      <div className="avatar-img">
        <img src="/assets/avatar-light.png" alt="avatar-light.png" />
      </div>
      <ul>
        <Link href="/">
          <li className={path === '/' ? 'active-router' : ''}>
            <a>HOME</a>
          </li>
        </Link>
        <Link href="/projects">
          <li className={path === '/projects' ? 'active-router' : ''}>
            <a>PROJECTS</a>
          </li>
        </Link>
        <Link href="/skills">
          <li className={path === '/skills' ? 'active-router' : ''}>
            <a>SKILLS</a>
          </li>
        </Link>
        <Link href="/contact">
          <li className={path === '/contact' ? 'active-router' : ''}>
            <a>CONTACT</a>
          </li>
        </Link>
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
};

export default Sidebar;
