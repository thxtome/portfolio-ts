import ColorTheme from '@common/type/ColorTheme';
import { DefaultTheme } from 'styled-components';

export const colors = {
  accent: {
    yellow: '#FFE24D' as ColorTheme,
    purple: { '500': '#5D5FEF' as ColorTheme, '300': '#A5A6F6' as ColorTheme, '100': '#EDEDFD' as ColorTheme },
    blue: { '500': '#0E6FFF' as ColorTheme, '300': '#64A3FF' as ColorTheme, '100': '#E7F1FF' as ColorTheme },
  },
  white: '#ffffff' as ColorTheme,
  black: '#031E13' as ColorTheme,
  grey: {
    '900': '#585858' as ColorTheme,
    '700': '#A5A5A5' as ColorTheme,
    '600': '#D2D2D2' as ColorTheme,
    '300': '#E5E5E5' as ColorTheme,
    '200': '#F3F3F3' as ColorTheme,
    '100': '#F9F9F9' as ColorTheme,
  },
  states: {
    alert: '#F3C846' as ColorTheme,
    error: '#E25443' as ColorTheme,
    info: '#559BE5' as ColorTheme,
    success: '#5CC73E' as ColorTheme,
  },
};

export const typographys = {
  display2: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 700,
  },
  display3: {
    fontSize: 28,
    lineHeight: 26,
    fontWeight: 700,
  },
  title1: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 700,
  },
  title2: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 700,
  },
  title4: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 700,
  },
  body2: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 400,
  },
  body3: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 400,
  },
  body4: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 400,
  },
  captionR: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: 400,
  },
  captionB: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: 700,
  },
  button: {
    sm: {
      fontSize: 12,
      lineHeight: 12,
      fontWeight: 700,
    },
    md: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: 700,
    },
    lg: {
      fontSize: 16,
      lineHeight: 16,
      fontWeight: 700,
    },
  },
};

const space = [4, 8, 12, 16, 24, 36, 48, 60, 72, 84];

const theme: DefaultTheme = {
  colors,
  typographys,
  space,
};

export default theme;
