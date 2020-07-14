import React from 'react';

import { useOpenSidebar } from 'utils/Contexts/menuContext';

import MenuMobileStyles from 'components/MenuMobile/styles';

const MenuMobile = () => {
  const { openSidebar, setOpenSidebar } = useOpenSidebar();

  return (
    <MenuMobileStyles onClick={() => setOpenSidebar(!openSidebar)}>
      <span className="line-mm" />
      <span className="line-mm" />
      <span className="line-mm" />
    </MenuMobileStyles>
  );
};

export default MenuMobile;
