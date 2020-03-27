import React from 'react';
import SwitchProvider from '../utils/Contexts/switchContext';
import SidebarProvider from '../utils/Contexts/menuContext';

const App = ({ children }) => (
  <SwitchProvider>
    <SidebarProvider>{children}</SidebarProvider>
  </SwitchProvider>
);

export default App;