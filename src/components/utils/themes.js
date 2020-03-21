import theme from 'styled-theming';

export const defaultBackground = theme('mode', {
  light: '#ecf2f8',
  dark: '#2F3136',
});

export const secondBackground = theme('mode', {
  light: '#FFFFFF',
  dark: '#202225',
});

export const defaultFont = theme('mode', {
  light: '#000000',
  dark: '#FFFFFF',
});

export const SecondFont = theme('mode', {
  light: '#1e90ff',
  dark: '#00FFFF',
});
