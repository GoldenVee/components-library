import {
  borderWidth,
  borderRadius,
  fontSize,
  fontWeight,
  spacing,
  standardColors,
} from '../../styling/globalStyling';

const colors = {
  background: '#202124',
  secondaryBackground: '#303134',

  primaryActive: standardColors.black,
  primaryHover: standardColors.white,
  primaryText: '#E7EAED',
  primaryTextHover: standardColors.black,
  primaryBorder: '#020617',
  primaryBorderHover: '#306182',

  secondaryActive: '#93B5EB',
  secondaryHover: '#084C61',
  secondaryText: standardColors.black,
  secondaryTextHover: '#E7EAED',
  secondaryBorder: '#312e81',
  secondaryBorderHover: '#053D4E',

  disabled: '#959DA4',
  disabledText: '#27282C',
  disabledBorder: '#494B4E',

  text: '#E7EAED',
  subText: '#899AAC',
  link: '#60a5fa',
  linkHover: '#ACCEF7',

  boxShadow: '#111316',
};

export const darkTheme = {
  colors,
  fontSize,
  borderWidth,
  borderRadius,
  fontWeight,
  spacing,
  standardColors,
};
