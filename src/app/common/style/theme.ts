import { DefaultTheme } from 'styled-components';

const colors = {
  white: '#ffffff',
  black: '#031E13',
  'grey-900': '#585858',
  'grey-700': '#A5A5A5',
  'grey-600': '#D2D2D2',
  'grey-300': '#E5E5E5',
  'grey-200': '#F3F3F3',
  'grey-100': '#F9F9F9',
  'purple-500': '#5D5FEF',
  'purple-300': '#A5A6F6',
  'purple-100': '#EDEDFD',
  'blue-500': '#0E6FFF',
  'blue-300': '#64A3FF',
  'blue-100': '#E7F1FF',
  'state-alert': 'F3C846',
  'state-error': 'E25443',
  'state-info': '559BE5',
  'state-success': '5CC73E',
};

export type ColorVariants = keyof typeof colors;

const typographys = {
  display2: {
    fontSize: 28,
    lineHeight: 1.285,
    fontWeight: 700,
  },
  display3: {
    fontSize: 26,
    lineHeight: 1.307,
    fontWeight: 700,
  },
  title1: {
    fontSize: 20,
    lineHeight: 1.3,
    fontWeight: 700,
  },
  title2: {
    fontSize: 18,
    lineHeight: 1.222,
    fontWeight: 700,
  },
  body1: {
    fontSize: 16,
    lineHeight: 1.25,
  },
  body2: {
    fontSize: 14,
    lineHeight: 1.285,
  },
  body3: {
    fontSize: 13,
    lineHeight: 1.384,
  },
  caption1: {
    fontSize: 12,
    lineHeight: 1.333,
  },
  caption2: {
    fontSize: 11,
    lineHeight: 1.272,
  },
};

export type TypographyVariants = keyof typeof typographys;

const space = {
  0: 0,
  2: 2,
  4: 4,
  6: 6,
  8: 8,
  10: 10,
  12: 12,
  14: 14,
  16: 16,
  18: 18,
  20: 20,
  24: 24,
  28: 28,
  30: 30,
  36: 36,
  40: 40,
  60: 60,
};

const breakpoints = ['640px', '1008px'];

const theme: DefaultTheme = {
  colors,
  space,
  breakpoints,
  typographys,
};

export default theme;
