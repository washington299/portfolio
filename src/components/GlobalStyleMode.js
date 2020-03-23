import React from 'react';
import ThemeProvider from '../utils/switchContext';

const ThemeColorProvider = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

export default ThemeColorProvider;
