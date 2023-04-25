import styled from 'styled-components';
import tw, { TwStyle } from 'twin.macro';
import { ThemeProps } from '../../themes';
import { TextProps } from './Text.props';

const renderColors = ({ color }: TextProps) => {
  switch (color) {
    case 'subtle':
      return ({ theme }: { theme: ThemeProps }) => theme.colors.subtle;
    case 'contrast':
      return ({ theme }: { theme: ThemeProps }) => theme.colors.contrast;
    case 'nonessential':
      return ({ theme }: { theme: ThemeProps }) => theme.colors.nonessential;
    case 'base':
      return ({ theme }: { theme: ThemeProps }) => theme.colors.base;
    case 'interactive':
      return ({ theme }: { theme: ThemeProps }) => theme.colors.interactive;
    default:
      return `color: ${color}`;
  }
};

export const StyledText = styled.span<TextProps>(({ allCaps }) => [
  ({ size = 'base' }) => Sizes[size],
  ({ weight = 'base' }) => Weights[weight],
  ({ family = 'serif' }) => FontFamilies[family],
  ({ stylize = 'none' }) => Stylizing[stylize],
  ({ align = 'left' }) => Alignment[align],
  ({ overflow = 'break' }) => Overflow[overflow],
  allCaps && tw`uppercase`,
  ({ color = 'base' }) => renderColors({ color }),
]);

export const Sizes: TwStyle = {
  xs: tw`text-xs leading-3`,
  sm: tw`text-sm leading-5`,
  base: tw`text-base leading-6`,
  lg: tw`text-lg leading-7`,
  xl: tw`text-xl leading-7`,
  '2xl': tw`text-2xl leading-8`,
  '3xl': tw`text-3xl leading-9`,
  '4xl': tw`text-4xl leading-10`,
  '5xl': tw`text-5xl leading-11`,
};

export const Weights: TwStyle = {
  light: tw`font-light`,
  base: tw`font-normal`,
  md: tw`font-medium`,
  semibold: tw`font-semibold`,
  bold: tw`font-bold`,
};

type styledThemeProps = {
  [key: string]: ({ theme }: { theme: ThemeProps }) => string | TwStyle;
};

export const Colors: styledThemeProps = {
  contrast: ({ theme }: { theme: ThemeProps }) => theme.colors.contrast,
  base: ({ theme }: { theme: ThemeProps }) => theme.colors.base,
  subtle: ({ theme }: { theme: ThemeProps }) => theme.colors.subtle,
  nonessential: ({ theme }: { theme: ThemeProps }) => theme.colors.nonessential,
  interactive: ({ theme }: { theme: ThemeProps }) => theme.colors.interactive,
};

export const FontFamilies: styledThemeProps = {
  serif: ({ theme }: { theme: ThemeProps }) => theme.fontFamily.serif,
  sansSerif: ({ theme }: { theme: ThemeProps }) => theme.fontFamily.sansSerif,
  monospace: ({ theme }: { theme: ThemeProps }) => theme.fontFamily.monospace,
};

export const Stylizing: TwStyle = {
  none: tw`not-italic`,
  italic: tw`italic`,
  underline: tw`underline`,
  strike: tw`line-through`,
};

export const Alignment: TwStyle = {
  left: tw`text-left`,
  right: tw`text-right`,
  center: tw`text-center`,
};

export const Overflow: TwStyle = {
  truncate: tw`truncate`,
  break: tw`break-words`,
  hyphen: tw`hyphens-auto`,
};
