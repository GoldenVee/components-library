import {
  borderWidth,
  borderRadius,
  fontSize,
  fontWeight,
  spacing,
  standardColors,
} from '../../styling/globalStyling';

const colors = {
  background: standardColors.white,
  secondaryBackground: '#E7E9EB',

  primaryActive: standardColors.white,
  primaryHover: standardColors.black,
  primaryText: standardColors.black,
  primaryTextHover: standardColors.white,
  primaryBorder: '#1e293b',
  primaryBorderHover: '#94a3b8',

  secondaryActive: '#0369A0',
  secondaryHover: '#183058',
  secondaryText: standardColors.white,
  secondaryTextHover: standardColors.white,
  secondaryBorder: '#2E4F85',
  secondaryBorderHover: '#4f46e5',

  disabled: '#ABB4BD',
  disabledText: '#414244',
  disabledBorder: '#414244',

  text: standardColors.black,
  subText: '#505D6F',
  link: '#004CFF',
  linkHover: '#032167',

  boxShadow: '#A9ABB1',
};

export const lightTheme = {
  colors,
  fontSize,
  borderWidth,
  borderRadius,
  fontWeight,
  spacing,
  standardColors,
};
