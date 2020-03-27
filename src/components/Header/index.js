import React from 'react';
import Switch from 'react-switch';

import MenuMobile from '../MenuMobile';
import { useTheme } from '../../utils/Contexts/switchContext';

import { HeaderStyle } from '../../utils/globalStyles';
import SwitchIconAreaStyle from './styles';

const Header = () => {
  const { colorTheme, setColorTheme } = useTheme();

  function changeTheme() {
    setColorTheme(colorTheme === 'light' ? 'dark' : 'light');
  }

  return (
    <HeaderStyle>
      <MenuMobile />
      <SwitchIconAreaStyle>
        <span>Light</span>
        <Switch
          onChange={changeTheme}
          checked={colorTheme !== 'light'}
          uncheckedIcon={false}
          checkedIcon={false}
          offColor="#FFFFFF"
          onColor="#000000"
          offHandleColor="#000000"
          onHandleColor="#FFFFFF"
        />
        <span>Dark</span>
      </SwitchIconAreaStyle>
    </HeaderStyle>
  );
};

export default Header;
