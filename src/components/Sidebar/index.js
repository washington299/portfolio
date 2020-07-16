import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

import { useOpenSidebar } from 'utils/Contexts/menuContext';

import {
  SidebarStyle,
  Avatar,
  Menu,
  MenuItem,
  Icons,
} from 'components/Sidebar/styles';

const Sidebar = () => {
  const router = useRouter();
  const { pathname } = router;
  const { openSidebar, setOpenSidebar } = useOpenSidebar();

  function closeSidebar() {
    setOpenSidebar(false);
  }

  return (
    <SidebarStyle display={openSidebar ? 'block' : 'none'}>
      <Avatar>
        <img src="/assets/avatar-light.png" alt="avatar-light.png" />
      </Avatar>
      <Menu>
        <Link href="/">
          <MenuItem
            className={pathname === '/' ? 'active' : ''}
            onClick={closeSidebar}
          >
            <a>MYSELF</a>
          </MenuItem>
        </Link>
        <Link href="/projects">
          <MenuItem
            className={pathname === '/projects' ? 'active' : ''}
            onClick={closeSidebar}
          >
            <a>PROJECTS</a>
          </MenuItem>
        </Link>
        <Link href="/skills">
          <MenuItem
            className={pathname === '/skills' ? 'active' : ''}
            onClick={closeSidebar}
          >
            <a>SKILLS</a>
          </MenuItem>
        </Link>
        <Link href="/contact">
          <MenuItem
            className={pathname === '/contact' ? 'active' : ''}
            onClick={closeSidebar}
          >
            <a>CONTACT</a>
          </MenuItem>
        </Link>
      </Menu>
      <Icons>
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
      </Icons>
    </SidebarStyle>
  );
};

export default Sidebar;
