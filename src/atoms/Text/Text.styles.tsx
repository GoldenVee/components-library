import styled from 'styled-components';
import tw, { TwStyle } from 'twin.macro';
import { ThemeProps, styledThemeProps } from '../../themes';
import { StyledTextProps } from './Text.props';

const renderColors = (color: string) => {
  return ({ theme }: { theme: ThemeProps }) =>
    theme.colors[color] || `color: ${color}`;
};

export const StyledText = styled.span<StyledTextProps>(({ allCaps }) => [
  ({ size }) => Sizes[size],
  ({ weight }) => Weights[weight],
  ({ family }) => FontFamilies[family],
  ({ stylize }) => Stylizing[stylize],
  ({ align }) => Alignment[align],
  ({ overflow }) => Overflow[overflow],
  ({ indent }) => Indent[indent],
  allCaps && tw`uppercase`,
  ({ color }) => renderColors(color),
]);

const Alignment: TwStyle = {
  left: tw`text-start`,
  right: tw`text-end`,
  center: tw`text-center`,
};

const Sizes: TwStyle = {
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

const Weights: TwStyle = {
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

const FontFamilies: styledThemeProps = {
  serif: ({ theme }) => theme.fontFamily.serif,
  sansSerif: ({ theme }) => theme.fontFamily.sansSerif,
  monospace: ({ theme }) => theme.fontFamily.monospace,
  h1: ({ theme }) => theme.fontFamily.primaryHeader,
  h2: ({ theme }) => theme.fontFamily.secondaryHeader,
  h3: ({ theme }) => theme.fontFamily.tertiaryHeader,
  h4: ({ theme }) => theme.fontFamily.quaternaryHeader,
  p: ({ theme }) => theme.fontFamily.body,
  ul: ({ theme }) => theme.fontFamily.body,
  ol: ({ theme }) => theme.fontFamily.body,
  li: ({ theme }) => theme.fontFamily.body,
  blockquote: ({ theme }) => theme.fontFamily.courierNew,
  lead: ({ theme }) => theme.fontFamily.arial,
  body: ({ theme }) => theme.fontFamily.body,
  subtext: ({ theme }) => theme.fontFamily.subtext,
  cambria: ({ theme }) => theme.fontFamily.cambria,
  georgia: ({ theme }) => theme.fontFamily.georgia,
  arial: ({ theme }) => theme.fontFamily.arial,
  helveticaNeue: ({ theme }) => theme.fontFamily.helveticaNeue,
  roboto: ({ theme }) => theme.fontFamily.roboto,
  courierNew: ({ theme }) => theme.fontFamily.courierNew,
  menlo: ({ theme }) => theme.fontFamily.menlo,
  monoco: ({ theme }) => theme.fontFamily.monoco,
};

const Stylizing: TwStyle = {
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

const Indent: TwStyle = {
  none: tw``,
  sm: tw`indent-4`,
  md: tw`indent-6`,
  lg: tw`indent-8`,
  li: tw`indent-1`,
};

const Overflow: TwStyle = {
  truncate: tw`truncate`,
  break: tw`break-words`,
  hyphen: tw`hyphens-auto`,
};
