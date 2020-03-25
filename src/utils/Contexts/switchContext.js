import React, { createContext, useState, useContext } from 'react';
import Cookies from 'js-cookie';

const ThemeContext = createContext('light');

export default function ThemeProvider({ children }) {
  const storagedColor = Cookies.get('mode');
  const [colorTheme, setColorTheme] = useState(storagedColor || 'light');

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
