import React, { useState } from 'react';
import Switch from 'react-switch';
import { IoIosSunny, IoIosMoon } from 'react-icons/io';

import MenuMobile from '../MenuMobile';

import { HeaderStyle } from '../../utils/globalStyles';
import SwitchIconStyle from './styles';

const Header = () => {
  const [toggleSwitch, setToggleSwitch] = useState(false);

  return (
    <HeaderStyle>
      <MenuMobile />
      <SwitchIconStyle>
        <IoIosSunny size={28} style={{ marginRight: 10, color: '#FFA500' }} />
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
        <IoIosMoon size={26} style={{ marginLeft: 10, color: '#FFF' }} />
      </SwitchIconStyle>
    </HeaderStyle>
  );
};

export default Header;
