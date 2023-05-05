import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ThemeProps, styledThemeProps } from '../../themes';
import {
  BorderProps,
  ButtonProps,
  FullButtonProps,
  PaddingSizeProps,
  StyledButtonProps,
} from './Button.props';
import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const StyledButton = styled.button<StyledButtonProps>(
  ({
    variant = 'primary',
    size = 'base',
    border = 'sm',
    borderRadius = 'base',
    boxShadow = 'sm',
    fullWidth,
    disabled,
    theme,
  }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    background: backgroundColors[variant]({ theme }),
    color: fontColors[variant]({ theme }),
    fontSize: fontSize[size]({ theme }),
    lineHeight: fontLH[size]({ theme }),
    padding: paddingSize[size],
    margin: '8px',
    borderStyle: 'solid',
    borderColor: borderColor[variant]({ theme }),
    borderWidth: borderSize[border],
    borderRadius: radiusSize[borderRadius]({ theme }),
    boxShadow: boxshadow[boxShadow]({ theme }),
    transition: prefersReducedMotion ? 'none' : 'all 0.2s ease-in-out',
    width: fullWidth ? '100%' : 'fit-content',
    maxWidth: fullWidth ? '100%' : '320px',
    height: 'fit-content',
    justifyContent: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    '&:not(:disabled):hover': {
      background: hoverColors[variant]({ theme }),
      color: fontHoverColors[variant]({ theme }),
    },
    '&:disabled': {
      opacity: '80% ',
      color:
        variant === 'transparent'
          ? '#667696'
          : backgroundColors[variant] || theme.colors.tertiary,
    },
    '&:focus': {
      border: '3px solid rgba(99, 102, 241, 0.8)',
    },
  }),
);

export const LabelContainer = styled.div<ButtonProps>(({ mediaSrc }) => [
  tw`flex w-auto px-2`,
  mediaSrc && tw`mx-2`,
]);

export const StyledIndicator = ({
  size = 'base',
  variant = 'primary',
}: FullButtonProps): JSX.Element => {
  const IndicatorSizes = {
    xs: 14,
    sm: 14,
    base: 16,
    ml: 18,
    lg: 18,
    xl: 20,
  };
  const IndicatorHeights = {
    xs: 14,
    sm: 14,
    base: 16,
    ml: 18,
    lg: 18,
    xl: 20,
  };

  const IndicatorVariant = {
    primary: 'white',
    secondary: '#1e40af',
    tertiary: '#312e81',
    quaternary: '#1e40af',
    transparent: '#4f46e5',
    confirm: '#022c22',
    destroy: 'white',
    gradient: 'white',
  };

  return (
    <span style={{ display: 'flex', alignSelf: 'center' }}>
      <ActivityIndicator
        loading
        size={IndicatorSizes[size]}
        color={IndicatorVariant[variant]}
        height={IndicatorHeights[size]}
        width={2}
        indicator="clip"
        speedMultiplier={0.8}
      />
    </span>
  );
};

const backgroundColors: any = {
  primary: ({ theme }: { theme: ThemeProps }) => theme.colors.primary,
  secondary: ({ theme }: { theme: ThemeProps }) => theme.colors.secondary,
  tertiary: ({ theme }: { theme: ThemeProps }) => theme.colors.tertiary,
  quaternary: ({ theme }: { theme: ThemeProps }) => theme.colors.quaternary,
  transparent: ({ theme }: { theme: ThemeProps }) => theme.colors.transparent,
  destroy: ({ theme }: { theme: ThemeProps }) => theme.colors.destroy,
  confirm: ({ theme }: { theme: ThemeProps }) => theme.colors.confirm,
  gradient: ({ theme }: { theme: ThemeProps }) => theme.colors.gradient,
};

const hoverColors: any = {
  primary: ({ theme }: { theme: ThemeProps }) => theme.colors.primeAccent,
  secondary: ({ theme }: { theme: ThemeProps }) => theme.colors.secondAccent,
  tertiary: ({ theme }: { theme: ThemeProps }) => theme.colors.tertAccent,
  quaternary: ({ theme }: { theme: ThemeProps }) => theme.colors.quatAccent,
  transparent: ({ theme }: { theme: ThemeProps }) => theme.colors.trAccent,
  destroy: ({ theme }: { theme: ThemeProps }) => theme.colors.dstrAccent,
  confirm: ({ theme }: { theme: ThemeProps }) => theme.colors.cfmAccent,
  gradient: ({ theme }: { theme: ThemeProps }) => theme.colors.gradAccent,
};

const fontSize: styledThemeProps = {
  xs: ({ theme }: { theme: ThemeProps }) => theme.typography.btn.xs,
  sm: ({ theme }: { theme: ThemeProps }) => theme.typography.btn.sm,
  base: ({ theme }: { theme: ThemeProps }) => theme.typography.btn.base,
  ml: ({ theme }: { theme: ThemeProps }) => theme.typography.btn.ml,
  lg: ({ theme }: { theme: ThemeProps }) => theme.typography.btn.lg,
  xl: ({ theme }: { theme: ThemeProps }) => theme.typography.btn.xl,
};
const fontLH: styledThemeProps = {
  xs: ({ theme }: { theme: ThemeProps }) => theme.typography.btn.lineHeight.xs,
  sm: ({ theme }: { theme: ThemeProps }) => theme.typography.btn.lineHeight.sm,
  base: ({ theme }: { theme: ThemeProps }) =>
    theme.typography.btn.lineHeight.base,
  ml: ({ theme }: { theme: ThemeProps }) => theme.typography.btn.lineHeight.ml,
  lg: ({ theme }: { theme: ThemeProps }) => theme.typography.btn.lineHeight.lg,
  xl: ({ theme }: { theme: ThemeProps }) => theme.typography.btn.lineHeight.xl,
};

const fontColors: styledThemeProps = {
  primary: ({ theme }: { theme: ThemeProps }) => theme.colors.font.btn.primary,
  secondary: ({ theme }: { theme: ThemeProps }) =>
    theme.colors.font.btn.secondary,
  tertiary: ({ theme }: { theme: ThemeProps }) =>
    theme.colors.font.btn.tertiary,
  quaternary: ({ theme }: { theme: ThemeProps }) =>
    theme.colors.font.btn.quaternary,
  transparent: ({ theme }: { theme: ThemeProps }) =>
    theme.colors.font.btn.transparent,
  destroy: ({ theme }: { theme: ThemeProps }) => theme.colors.font.btn.destroy,
  confirm: ({ theme }: { theme: ThemeProps }) => theme.colors.font.btn.confirm,
  gradient: ({ theme }: { theme: ThemeProps }) =>
    theme.colors.font.btn.gradient,
};
const fontHoverColors: any = {
  primary: ({ theme }: { theme: ThemeProps }) =>
    theme.colors.font.btn.primeAccent,
  secondary: ({ theme }: { theme: ThemeProps }) =>
    theme.colors.font.btn.secondAccent,
  tertiary: ({ theme }: { theme: ThemeProps }) =>
    theme.colors.font.btn.tertAccent,
  quaternary: ({ theme }: { theme: ThemeProps }) =>
    theme.colors.font.btn.quatAccent,
  transparent: ({ theme }: { theme: ThemeProps }) =>
    theme.colors.font.btn.trAccent,
  destroy: ({ theme }: { theme: ThemeProps }) =>
    theme.colors.font.btn.dstrAccent,
  confirm: ({ theme }: { theme: ThemeProps }) =>
    theme.colors.font.btn.cfmAccent,
  gradient: ({ theme }: { theme: ThemeProps }) =>
    theme.colors.font.btn.gradAccent,
};

const paddingSize: PaddingSizeProps = {
  xs: '6px 8px',
  sm: '6px 10px',
  base: '8px 14px',
  ml: '10px 16px',
  lg: '14px 20px',
  xl: '14px 20px',
};

const borderSize: BorderProps = {
  none: 'none',
  sm: '1px',
  base: '2px',
  lg: '3px',
};

const borderColor: styledThemeProps = {
  primary: ({ theme }: { theme: ThemeProps }) => theme.colors.primeAccent,
  secondary: ({ theme }: { theme: ThemeProps }) => theme.colors.secondAccent,
  tertiary: ({ theme }: { theme: ThemeProps }) => theme.colors.tertAccent,
  quaternary: ({ theme }: { theme: ThemeProps }) => theme.colors.quatAccent,
  transparent: ({ theme }: { theme: ThemeProps }) => theme.colors.trAccent,
  destroy: ({ theme }: { theme: ThemeProps }) => theme.colors.dstrAccent,
  confirm: ({ theme }: { theme: ThemeProps }) => theme.colors.cfmAccent,
  gradient: ({ theme }: { theme: ThemeProps }) => theme.colors.primeAccent,
};

const radiusSize: styledThemeProps = {
  none: ({ theme }: { theme: ThemeProps }) => theme.borderRadius.none,
  sm: ({ theme }: { theme: ThemeProps }) => theme.borderRadius.sm,
  base: ({ theme }: { theme: ThemeProps }) => theme.borderRadius.base,
  lg: ({ theme }: { theme: ThemeProps }) => theme.borderRadius.lg,
  round: ({ theme }: { theme: ThemeProps }) => theme.borderRadius.round,
};

const boxshadow: styledThemeProps = {
  none: ({ theme }: { theme: ThemeProps }) => theme.boxShadow.none,
  sm: ({ theme }: { theme: ThemeProps }) => theme.boxShadow.sm,
  lg: ({ theme }: { theme: ThemeProps }) => theme.boxShadow.lg,
  inset: ({ theme }: { theme: ThemeProps }) => theme.boxShadow.inset,
};
