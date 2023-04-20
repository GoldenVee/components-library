import { getLightTheme } from './default/lighttheme';
import { getDarkTheme } from './default/darktheme';
import { TwStyle } from 'twin.macro';

export interface ThemeProps {
  screens: ScreenProps;
  colors: ColorProps;
  border: BorderProps;
  borderRadius: BorderRadiusProps;
  boxShadow: BoxShadowProps;
}
export interface ScreenProps {
  sMobile: TwStyle | string;
  mobile: TwStyle | string;
  tablet: TwStyle | string;
  desktop: TwStyle | string;
  lgDesktop: TwStyle | string;
}

export interface ColorProps {
  // bg hierarchy colors
  bgLvl0: TwStyle | string;
  bgLvl0Accent: TwStyle | string;
  bgLvl1: TwStyle | string;
  bgLvl1Accent: TwStyle | string;
  bgLvl2: TwStyle | string;
  bgLvl2Accent: TwStyle | string;
  bgLvl3: TwStyle | string;
  bgLvl3Accent: TwStyle | string;

  divider: TwStyle | string;

  // variant colors
  primary: TwStyle | string;
  secondary: TwStyle | string;
  tertiary: TwStyle | string;
  quaternary: TwStyle | string;
  transparent: TwStyle | string;
  gradient: TwStyle | string;

  // utility colors
  warning: TwStyle | string;
  destroy: TwStyle | string;
  confirm: TwStyle | string;
  disabled: TwStyle | string;
}

export interface BorderProps {
  noBorder: TwStyle | string;
  small: TwStyle | string;
  medium: TwStyle | string;
}

export interface BorderRadiusProps {
  none: TwStyle | string;
  small: TwStyle | string;
  medium: TwStyle | string;
  large: TwStyle | string;
  round: TwStyle | string;
}

export interface BoxShadowProps {
  none: TwStyle | string;
  small: TwStyle | string;
  large: TwStyle | string;
  inset: TwStyle | string;
}

export const themes = {
  light: getLightTheme(),
  dark: getDarkTheme(),
};
