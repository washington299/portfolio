import React, { createContext, useState, useContext } from 'react';
import Cookies from 'js-cookie';

const ThemeContext = createContext();

function getInitialColor() {
  const storagedColor = Cookies.get('mode');
  return storagedColor || 'light';
}

export default function ThemeProvider({ children }) {
  const [colorTheme, setColorTheme] = useState(getInitialColor);

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
