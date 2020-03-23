import React, { useState } from 'react';
import Switch from 'react-switch';

import MenuMobile from '../MenuMobile';

import { HeaderStyle } from '../../utils/globalStyles';
import SwitchIconStyle from './styles';

const Header = () => {
  const [toggleSwitch, setToggleSwitch] = useState(false);

  return (
    <HeaderStyle>
      <MenuMobile />
      <SwitchIconStyle>
        <span>Light</span>
        <Switch
          checked={toggleSwitch}
          uncheckedIcon={false}
          checkedIcon={false}
          offColor="#FFFFFF"
          onColor="#000000"
          offHandleColor="#000000"
          onHandleColor="#FFFFFF"
          onChange={() => setToggleSwitch(!toggleSwitch)}
        />
        <span>Dark</span>
      </SwitchIconStyle>
    </HeaderStyle>
  );
};

export default Header;
