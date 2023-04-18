import { getLightTheme } from './default/lighttheme';
import { getDarkTheme } from './default/darktheme';
import { TwStyle } from 'twin.macro';

export interface ThemeProps {
  colors: ColorProps;
  border: BorderProps;
  borderRadius: BorderRadiusProps;
  boxShadow: BoxShadowProps;
}

export interface ColorProps {
  background: TwStyle | string;
  secondaryBackground: TwStyle | string;
  primary: TwStyle | string;
  secondary: TwStyle | string;
  tertiary: TwStyle | string;
  quaternary: TwStyle | string;
  transparent: TwStyle | string;
  gradient: TwStyle | string;
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
