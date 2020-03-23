import React from 'react';
import Switch from 'react-switch';

import { useTheme } from '../../utils/switchContext';
import MenuMobile from '../MenuMobile';

import { HeaderStyle } from '../../utils/globalStyles';
import SwitchIconStyle from './styles';

const Header = () => {
  const { colorTheme, setColorTheme } = useTheme();

  function changeTheme() {
    if (colorTheme === 'light') {
      setColorTheme('dark');
      return;
    }
    setColorTheme('light');
  }

  return (
    <HeaderStyle>
      <MenuMobile />
      <SwitchIconStyle>
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
      </SwitchIconStyle>
    </HeaderStyle>
  );
};

export default Header;
