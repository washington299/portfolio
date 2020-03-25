import React from 'react';
import SwitchProvider from '../utils/switchContext';

const SwitchColorProvider = ({ children }) => (
  <SwitchProvider>{children}</SwitchProvider>
);

export default SwitchColorProvider;
