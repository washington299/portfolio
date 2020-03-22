import React from 'react';

import { useOpenSidebar } from '../../utils/menuContext';

import MenuMobileStyles from './styles';

const MenuMobile = () => {
  const { openSidebar, setOpenSidebar } = useOpenSidebar();

  return (
    <MenuMobileStyles onClick={() => setOpenSidebar(!openSidebar)}>
      <span />
      <span />
      <span />
    </MenuMobileStyles>
  );
};

export default MenuMobile;
