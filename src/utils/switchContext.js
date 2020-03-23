import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext('light');

export default function ThemeProvider({ children }) {
  const [colorTheme, setColorTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  const { colorTheme, setColorTheme } = context;
  return { colorTheme, setColorTheme };
}
