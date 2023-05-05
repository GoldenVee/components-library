import styled from 'styled-components';
import { ThemeProps, styledThemeProps } from '../../themes';
import { StyledTextProps } from './Text.props';

export const StyledText = styled.span<StyledTextProps>(
  ({
    size,
    role = 'p',
    weight,
    family,
    stylize,
    align = 'left',
    overflow,
    allCaps,
    color,
    theme,
  }) => ({
    display: role === 'li' ? 'list-item' : 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    color:
      typeof color === 'string' && fontColors[color]
        ? fontColors[color]({ theme })
        : color,
    fontSize: fontSizes[size ? size : role]({ theme }),
    lineHeight: fontLH[size ? size : role]({ theme }),
    fontWeight: fontWeights[weight ? weight : role]({ theme }),
    fontFamily: fontFamilies[family ? family : role]({ theme }),
    fontStyle:
      stylize === 'italic' || role === 'h3' || role === 'blockquote'
        ? 'italic'
        : 'normal',
    textDecorationLine:
      stylize === 'underline' || role === 'a'
        ? 'underline'
        : stylize === 'strike'
        ? 'line-through'
        : 'normal',
    textAlign: align,
    overflowWrap: overflow === 'break' ? 'break-word' : 'normal',
    hyphens: overflow === 'hyphen' ? 'auto' : undefined,
    letterSpacing: stylize === 'h4' ? '-0.05em' : '0em',
    textTransform: allCaps ? 'uppercase' : 'none',
    listStyle: 'inside',
    padding: role === 'li' ? '6px 0px' : '8px 0px',
    paddingLeft: role == 'blockquote' ? '6px' : '0px',
    borderLeft:
      role === 'blockquote' ? `4px solid ${theme.colors.primary}` : 'none',
    '&:hover': {},
    '&:focus': {
      border: '3px solid rgba(99, 102, 241, 0.8)',
    },
  }),
);

const fontColors: styledThemeProps = {
  primary: ({ theme }: { theme: ThemeProps }) => theme.colors.font.primary,
  secondary: ({ theme }: { theme: ThemeProps }) => theme.colors.font.secondary,
  tertiary: ({ theme }: { theme: ThemeProps }) => theme.colors.font.tertiary,
  contrast: ({ theme }: { theme: ThemeProps }) => theme.colors.font.contrast,
  interactive: ({ theme }: { theme: ThemeProps }) =>
    theme.colors.font.interactive,
  primaryHead: ({ theme }: { theme: ThemeProps }) =>
    theme.colors.font.heading.primary,
  secondaryHead: ({ theme }: { theme: ThemeProps }) =>
    theme.colors.font.heading.secondary,
  tertiaryHead: ({ theme }: { theme: ThemeProps }) =>
    theme.colors.font.heading.tertiary,
  quaternaryHead: ({ theme }: { theme: ThemeProps }) =>
    theme.colors.font.heading.quaternary,
};

const fontSizes: styledThemeProps = {
  xs: ({ theme }: { theme: ThemeProps }) => theme.typography.size.xs,
  sm: ({ theme }: { theme: ThemeProps }) => theme.typography.size.sm,
  base: ({ theme }: { theme: ThemeProps }) => theme.typography.size.base,
  lg: ({ theme }: { theme: ThemeProps }) => theme.typography.size.lg,
  xl: ({ theme }: { theme: ThemeProps }) => theme.typography.size.xl,
  xxl: ({ theme }: { theme: ThemeProps }) => theme.typography.size.xxl,
  xxxl: ({ theme }: { theme: ThemeProps }) => theme.typography.size.xxxl,
  ivxl: ({ theme }: { theme: ThemeProps }) => theme.typography.size.ivxl,
  vxl: ({ theme }: { theme: ThemeProps }) => theme.typography.size.vxl,
  h1: ({ theme }: { theme: ThemeProps }) => theme.typography.size.vxl,
  h2: ({ theme }: { theme: ThemeProps }) => theme.typography.size.ivxl,
  h3: ({ theme }: { theme: ThemeProps }) => theme.typography.size.xxxl,
  h4: ({ theme }: { theme: ThemeProps }) => theme.typography.size.xxl,
  p: ({ theme }: { theme: ThemeProps }) => theme.typography.size.base,
  ul: ({ theme }: { theme: ThemeProps }) => theme.typography.size.base,
  ol: ({ theme }: { theme: ThemeProps }) => theme.typography.size.base,
  li: ({ theme }: { theme: ThemeProps }) => theme.typography.size.base,
  blockquote: ({ theme }: { theme: ThemeProps }) => theme.typography.size.base,
  a: ({ theme }: { theme: ThemeProps }) => theme.typography.size.base,
};
const fontLH: styledThemeProps = {
  xs: ({ theme }: { theme: ThemeProps }) => theme.typography.lineHeight.xs,
  sm: ({ theme }: { theme: ThemeProps }) => theme.typography.lineHeight.sm,
  base: ({ theme }: { theme: ThemeProps }) => theme.typography.lineHeight.base,
  lg: ({ theme }: { theme: ThemeProps }) => theme.typography.lineHeight.lg,
  xl: ({ theme }: { theme: ThemeProps }) => theme.typography.lineHeight.xl,
  xxl: ({ theme }: { theme: ThemeProps }) => theme.typography.lineHeight.xxl,
  xxxl: ({ theme }: { theme: ThemeProps }) => theme.typography.lineHeight.xxxl,
  ivxl: ({ theme }: { theme: ThemeProps }) => theme.typography.lineHeight.ivxl,
  vxl: ({ theme }: { theme: ThemeProps }) => theme.typography.lineHeight.vxl,
  h1: ({ theme }: { theme: ThemeProps }) => theme.typography.lineHeight.vxl,
  h2: ({ theme }: { theme: ThemeProps }) => theme.typography.lineHeight.ivxl,
  h3: ({ theme }: { theme: ThemeProps }) => theme.typography.lineHeight.xxxl,
  h4: ({ theme }: { theme: ThemeProps }) => theme.typography.lineHeight.xxl,
  p: ({ theme }: { theme: ThemeProps }) => theme.typography.lineHeight.base,
  ul: ({ theme }: { theme: ThemeProps }) => theme.typography.lineHeight.base,
  ol: ({ theme }: { theme: ThemeProps }) => theme.typography.lineHeight.base,
  li: ({ theme }: { theme: ThemeProps }) => theme.typography.lineHeight.base,
  blockquote: ({ theme }: { theme: ThemeProps }) =>
    theme.typography.lineHeight.base,
  a: ({ theme }: { theme: ThemeProps }) => theme.typography.lineHeight.base,
};

const fontWeights: styledThemeProps = {
  light: ({ theme }: { theme: ThemeProps }) => theme.typography.weight.light,
  base: ({ theme }: { theme: ThemeProps }) => theme.typography.weight.base,
  md: ({ theme }: { theme: ThemeProps }) => theme.typography.weight.md,
  semibold: ({ theme }: { theme: ThemeProps }) =>
    theme.typography.weight.semibold,
  bold: ({ theme }: { theme: ThemeProps }) => theme.typography.weight.bold,
  h1: ({ theme }: { theme: ThemeProps }) => theme.typography.weight.bold,
  h2: ({ theme }: { theme: ThemeProps }) => theme.typography.weight.bold,
  h3: ({ theme }: { theme: ThemeProps }) => theme.typography.weight.bold,
  h4: ({ theme }: { theme: ThemeProps }) => theme.typography.weight.bold,
  p: ({ theme }: { theme: ThemeProps }) => theme.typography.weight.base,
  ul: ({ theme }: { theme: ThemeProps }) => theme.typography.weight.base,
  ol: ({ theme }: { theme: ThemeProps }) => theme.typography.weight.base,
  li: ({ theme }: { theme: ThemeProps }) => theme.typography.weight.base,
  blockquote: ({ theme }: { theme: ThemeProps }) =>
    theme.typography.weight.base,
  a: ({ theme }: { theme: ThemeProps }) => theme.typography.weight.base,
};

const fontFamilies: styledThemeProps = {
  serif: ({ theme }) => theme.typography.fontFamily.serif,
  sansSerif: ({ theme }) => theme.typography.fontFamily.sansSerif,
  monospace: ({ theme }) => theme.typography.fontFamily.monospace,
  h1: ({ theme }) => theme.typography.fontFamily.primaryHeader,
  h2: ({ theme }) => theme.typography.fontFamily.secondaryHeader,
  h3: ({ theme }) => theme.typography.fontFamily.tertiaryHeader,
  h4: ({ theme }) => theme.typography.fontFamily.quaternaryHeader,
  p: ({ theme }) => theme.typography.fontFamily.body,
  ul: ({ theme }) => theme.typography.fontFamily.body,
  ol: ({ theme }) => theme.typography.fontFamily.body,
  li: ({ theme }) => theme.typography.fontFamily.body,
  blockquote: ({ theme }) =>
    theme.typography.fontFamily.courierNew ||
    theme.typography.fontFamily.monospace,
  lead: ({ theme }) =>
    theme.typography.fontFamily.arial || theme.typography.fontFamily.body,
  body: ({ theme }) => theme.typography.fontFamily.body,
  subtext: ({ theme }) => theme.typography.fontFamily.subtext,
  cambria: ({ theme }) =>
    theme.typography.fontFamily.cambria || theme.typography.fontFamily.serif,
  georgia: ({ theme }) =>
    theme.typography.fontFamily.georgia || theme.typography.fontFamily.serif,
  arial: ({ theme }) =>
    theme.typography.fontFamily.arial || theme.typography.fontFamily.sansSerif,
  helveticaNeue: ({ theme }) =>
    theme.typography.fontFamily.helveticaNeue ||
    theme.typography.fontFamily.sansSerif,
  roboto: ({ theme }) =>
    theme.typography.fontFamily.roboto || theme.typography.fontFamily.sansSerif,
  courierNew: ({ theme }) =>
    theme.typography.fontFamily.courierNew ||
    theme.typography.fontFamily.monospace,
  menlo: ({ theme }) =>
    theme.typography.fontFamily.menlo || theme.typography.fontFamily.monospace,
  monaco: ({ theme }) =>
    theme.typography.fontFamily.monaco || theme.typography.fontFamily.monospace,
};
