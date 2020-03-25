import React, { useEffect } from 'react';
import Switch from 'react-switch';
import Cookies from 'js-cookie';

import MenuMobile from '../MenuMobile';
import { useTheme } from '../../utils/switchContext';

import { HeaderStyle } from '../../utils/globalStyles';
import SwitchIconAreaStyle from './styles';

const Header = () => {
  const { colorTheme, setColorTheme } = useTheme();

  useEffect(() => {
    Cookies.set('mode', colorTheme, { expires: 1 });
  }, [colorTheme]);

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
