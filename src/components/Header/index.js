import React from 'react';

import { useOpenSidebar } from '../utils/menuContext';

import { HeaderStyle } from '../utils/globalStyles';
import MenuMobile from './styles';

const Header = () => {
  const { openSidebar, setOpenSidebar } = useOpenSidebar();

  return (
    <HeaderStyle>
      <MenuMobile onClick={() => setOpenSidebar(!openSidebar)}>
        <span />
        <span />
        <span />
      </MenuMobile>
    </HeaderStyle>
  );
};

export default Header;
