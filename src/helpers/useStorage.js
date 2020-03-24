import Cookies from 'js-cookie';
import { useTheme } from '../utils/switchContext';

function useStorage() {
  const { colorTheme } = useTheme();
  const storagedColor = Cookies.get('mode');

  return storagedColor === colorTheme ? JSON.parse(storagedColor) : colorTheme;
}

export default useStorage;
