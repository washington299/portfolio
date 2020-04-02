import React from 'react';
import Switch from 'react-switch';

import MenuMobile from '../MenuMobile';

import { HeaderStyle, SwitchIcon, ColorText } from './styles';

const Header = ({ toggleTheme, checked }) => (
  <HeaderStyle>
    <MenuMobile />
    <SwitchIcon>
      <ColorText>Light</ColorText>
      <Switch
        onChange={toggleTheme}
        checked={checked}
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

export default Header;
