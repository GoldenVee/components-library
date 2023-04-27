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
  ({ size, role }) => Sizes[size || role],
  ({ weight, role }) => Weights[weight || role],
  ({ family, role }) => FontFamilies[family || role],
  ({ stylize, role }) => Stylizing[stylize || role],
  ({ align = 'left' }) => Alignment[align],
  ({ overflow = 'break' }) => Overflow[overflow],
  ({ indent, role }) => Indent[indent || role],
  allCaps && tw`uppercase`,
  ({ color }) => renderColors({ color }),
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
  h1: tw`text-5xl leading-11`,
  h2: tw`text-4xl leading-10`,
  h3: tw`text-3xl leading-9`,
  h4: tw`text-2xl leading-8`,
  p: tw`text-base leading-6`,
  ul: tw`text-base leading-6`,
  ol: tw`text-base leading-6`,
  li: tw`text-base leading-6`,
  blockquote: tw`text-base leading-6`,
  a: tw`text-base leading-6`,
};

export const Weights: TwStyle = {
  light: tw`font-light`,
  base: tw`font-normal`,
  md: tw`font-medium`,
  semibold: tw`font-semibold`,
  bold: tw`font-bold`,
  h1: tw`font-bold `,
  h2: tw`font-bold`,
  h3: tw`font-bold`,
  h4: tw`font-bold`,
  p: tw`font-normal`,
  ul: tw`font-normal`,
  ol: tw`font-normal`,
  li: tw`font-normal`,
  blockquote: tw`font-normal`,
  a: tw`font-normal`,
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
  h1: ({ theme }: { theme: ThemeProps }) => theme.fontFamily.primaryHeader,
  h2: ({ theme }: { theme: ThemeProps }) => theme.fontFamily.secondaryHeader,
  h3: ({ theme }: { theme: ThemeProps }) => theme.fontFamily.tertiaryHeader,
  h4: ({ theme }: { theme: ThemeProps }) => theme.fontFamily.quaternaryHeader,
  p: ({ theme }: { theme: ThemeProps }) => theme.fontFamily.body,
  ul: ({ theme }: { theme: ThemeProps }) => theme.fontFamily.body,
  ol: ({ theme }: { theme: ThemeProps }) => theme.fontFamily.body,
  li: ({ theme }: { theme: ThemeProps }) => theme.fontFamily.body,
  blockquote: ({ theme }: { theme: ThemeProps }) => theme.fontFamily.courierNew,
  lead: ({ theme }: { theme: ThemeProps }) => theme.fontFamily.arial,
  body: ({ theme }: { theme: ThemeProps }) => theme.fontFamily.body,
  subtext: ({ theme }: { theme: ThemeProps }) => theme.fontFamily.subtext,
  cambria: ({ theme }: { theme: ThemeProps }) => theme.fontFamily.cambria,
  georgia: ({ theme }: { theme: ThemeProps }) => theme.fontFamily.georgia,
  arial: ({ theme }: { theme: ThemeProps }) => theme.fontFamily.arial,
  helveticaNeue: ({ theme }: { theme: ThemeProps }) =>
    theme.fontFamily.helveticaNeue,
  roboto: ({ theme }: { theme: ThemeProps }) => theme.fontFamily.roboto,
  courierNew: ({ theme }: { theme: ThemeProps }) => theme.fontFamily.courierNew,
  menlo: ({ theme }: { theme: ThemeProps }) => theme.fontFamily.menlo,
  monoco: ({ theme }: { theme: ThemeProps }) => theme.fontFamily.monoco,
};

export const Stylizing: TwStyle = {
  none: tw`not-italic`,
  italic: tw`italic`,
  underline: tw`underline underline-offset-2`,
  strike: tw`line-through`,
  h3: tw`italic`,
  h4: tw`tracking-tighter`,
  a: tw`underline underline-offset-2`,
  ul: tw`list-disc`,
  ol: tw`list-decimal`,
  li: tw`ml-8 pt-2`,
  blockquote: tw`border-l-4 border-indigo-500 pl-4 italic`,
};

export const Indent: TwStyle = {
  none: tw``,
  sm: tw`indent-4`,
  md: tw`indent-6`,
  lg: tw`indent-8`,
  li: tw`indent-1`,
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
