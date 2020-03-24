import React, { useEffect } from 'react';
import Switch from 'react-switch';
import Cookies from 'js-cookie';

import MenuMobile from '../MenuMobile';
import { useTheme } from '../../utils/switchContext';

import { HeaderStyle } from '../../utils/globalStyles';
import SwitchIconStyle from './styles';

const Header = () => {
  const { colorTheme, setColorTheme } = useTheme();

  useEffect(() => {
    Cookies.set('mode', colorTheme);
  }, [colorTheme]);

  function changeTheme() {
    setColorTheme(colorTheme === 'light' ? 'dark' : 'light');
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
