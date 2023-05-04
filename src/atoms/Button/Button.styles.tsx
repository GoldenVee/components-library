import React from 'react';
import styled from 'styled-components';
import tw, { TwStyle } from 'twin.macro';
import { ThemeProps, styledThemeProps } from '../../themes';
import { ButtonProps, FullButtonProps } from './Button.props';
import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';

export const StyledBaseButton = styled.button(
  tw`flex flex-row justify-center items-center`,
);

export const StyledButton = styled(StyledBaseButton)<ButtonProps>(
  ({ variant, fullWidth, disabled, theme }) => [
    ({ variant = 'primary' }) => Variants[variant],
    ({ size = 'medium' }) => Sizes[size],
    ({ border = 'none' }) => Border[border],
    ({ borderRadius = 'medium' }) => BorderRadius[borderRadius],
    ({ boxShadow = 'small' }) => BoxShadow[boxShadow],
    fullWidth && tw`flex w-full justify-center`,
    disabled && theme.colors.disabled,
    disabled &&
      variant === 'transparent' &&
      tw`disabled:opacity-75 bg-slate-200`,
  ],
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
    <span style={{ display: 'flex' }}>
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

const Sizes: TwStyle = {
  xs: tw`px-2 py-1.5 m-2 text-xs h-min w-fit`,
  sm: tw`px-2.5 py-1.5 m-2 text-sm h-min w-fit`,
  base: tw`px-3.5 py-2 m-2 text-sm h-min w-fit`,
  ml: tw`px-4 py-3 m-2 text-sm h-min w-fit`,
  lg: tw`px-5 py-3.5 m-2 text-sm h-min w-fit`,
  xl: tw`px-6 py-4 m-2 text-base h-min w-fit`,
};

const Variants: styledThemeProps = {
  primary: ({ theme }: { theme: ThemeProps }) => theme.colors.primary,
  secondary: ({ theme }: { theme: ThemeProps }) => theme.colors.secondary,
  tertiary: ({ theme }: { theme: ThemeProps }) => theme.colors.tertiary,
  quaternary: ({ theme }: { theme: ThemeProps }) => theme.colors.quaternary,
  transparent: ({ theme }: { theme: ThemeProps }) => theme.colors.transparent,
  destroy: ({ theme }: { theme: ThemeProps }) => theme.colors.destroy,
  confirm: ({ theme }: { theme: ThemeProps }) => theme.colors.confirm,
  gradient: ({ theme }: { theme: ThemeProps }) => theme.colors.gradient,
};

const Border: styledThemeProps = {
  none: ({ theme }: { theme: ThemeProps }) => theme.border.noBorder,
  small: ({ theme }: { theme: ThemeProps }) => theme.border.small,
  medium: ({ theme }: { theme: ThemeProps }) => theme.border.medium,
};

const BorderRadius: styledThemeProps = {
  none: ({ theme }: { theme: ThemeProps }) => theme.borderRadius.none,
  small: ({ theme }: { theme: ThemeProps }) => theme.borderRadius.small,
  medium: ({ theme }: { theme: ThemeProps }) => theme.borderRadius.medium,
  large: ({ theme }: { theme: ThemeProps }) => theme.borderRadius.large,
  round: ({ theme }: { theme: ThemeProps }) => theme.borderRadius.round,
};

const BoxShadow: styledThemeProps = {
  none: ({ theme }: { theme: ThemeProps }) => theme.boxShadow.none,
  small: ({ theme }: { theme: ThemeProps }) => theme.boxShadow.small,
  large: ({ theme }: { theme: ThemeProps }) => theme.boxShadow.large,
  inset: ({ theme }: { theme: ThemeProps }) => theme.boxShadow.inset,
};
