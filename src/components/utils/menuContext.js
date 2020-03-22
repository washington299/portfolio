import React, { createContext, useState, useContext } from 'react';

const SidebarContext = createContext(false);

export default function SidebarProvider({ children }) {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <SidebarContext.Provider value={{ openSidebar, setOpenSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useOpenSidebar() {
  const context = useContext(SidebarContext);
  const { openSidebar, setOpenSidebar } = context;
  return { openSidebar, setOpenSidebar };
}
