import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

function useStorageTheme(key, initialTheme) {
  const [theme, setTheme] = useState(() => {
    const storagedTheme = Cookies.get(key);

    if (storagedTheme) {
      return JSON.parse(storagedTheme);
    }

    return initialTheme;
  });

  useEffect(() => {
    Cookies.set(key, JSON.stringify(theme), { expires: 1 });
  }, [theme]);

  return [theme, setTheme];
}

export default useStorageTheme;
