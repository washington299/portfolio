import React from 'react';
import SwitchProvider from '../utils/Contexts/switchContext';

const SwitchColorProvider = ({ children }) => (
  <SwitchProvider>{children}</SwitchProvider>
);

export default SwitchColorProvider;
