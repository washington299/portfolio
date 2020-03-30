import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import MenuMobile from '../MenuMobile';

import { HeaderStyle, SwitchIcon, ColorText } from './styles';

const Header = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <HeaderStyle>
      <MenuMobile />
      <SwitchIcon>
        <ColorText>Light</ColorText>
        <Switch
          onChange={toggleTheme}
          checked={title !== 'light'}
          uncheckedIcon={false}
          checkedIcon={false}
          offColor="#FFFFFF"
          onColor="#000000"
          offHandleColor="#000000"
          onHandleColor="#FFFFFF"
        />
        <ColorText>Dark</ColorText>
      </SwitchIcon>
    </HeaderStyle>
  );
};

export default Header;
