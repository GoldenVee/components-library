import { getLightTheme } from './default/lighttheme';
import { getDarkTheme } from './default/darktheme';
import { TwStyle } from 'twin.macro';
import { ColorProps } from './themeTypes/colorTypes';
import { TypographyProps } from './themeTypes/typographyTypes';

export type styledThemeProps = {
  [key: string]: ({ theme }: { theme: ThemeProps }) => string;
};

export interface ThemeProps {
  screens: ScreenProps;
  typography: TypographyProps;
  colors: ColorProps;
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

interface BorderRadiusProps {
  none: string;
  sm: string;
  base: string;
  lg: string;
  round: string;
}

interface BoxShadowProps {
  none: string;
  sm: string;
  lg: string;
  inset: string;
}

export const themes = {
  light: getLightTheme(),
  dark: getDarkTheme(),
};
