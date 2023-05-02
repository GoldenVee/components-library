import styled from 'styled-components';
import tw, { TwStyle } from 'twin.macro';
import { ThemeProps, styledThemeProps } from '../../themes';
import { ButtonProps } from './Button.props';

export const StyledButton = styled.button<ButtonProps>(
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
    tw`flex flex-row justify-center items-center`,
  ],
);

export const LabelContainer = styled.div<ButtonProps>(({ hasIcon }) => [
  tw`flex w-auto`,
  hasIcon && tw`mx-2`,
]);

export const Sizes: TwStyle = {
  xs: tw`px-2 py-1.5 m-2 text-xs h-min`,
  small: tw`px-2.5 py-1.5 m-2 text-sm h-min`,
  medium: tw`px-3.5 py-2 m-2 text-sm h-min`,
  ml: tw`px-4 py-3 m-2 text-sm h-min`,
  large: tw`px-5 py-3.5 m-2 text-sm h-min`,
  xl: tw`px-6 py-4 m-2 text-base h-min`,
};

export const Variants: styledThemeProps = {
  primary: ({ theme }: { theme: ThemeProps }) => theme.colors.primary,
  secondary: ({ theme }: { theme: ThemeProps }) => theme.colors.secondary,
  tertiary: ({ theme }: { theme: ThemeProps }) => theme.colors.tertiary,
  quarterary: ({ theme }: { theme: ThemeProps }) => theme.colors.quaternary,
  transparent: ({ theme }: { theme: ThemeProps }) => theme.colors.transparent,
  destroy: ({ theme }: { theme: ThemeProps }) => theme.colors.destroy,
  confirm: ({ theme }: { theme: ThemeProps }) => theme.colors.confirm,
  gradient: ({ theme }: { theme: ThemeProps }) => theme.colors.gradient,
};

export const Border: styledThemeProps = {
  none: ({ theme }: { theme: ThemeProps }) => theme.border.noBorder,
  small: ({ theme }: { theme: ThemeProps }) => theme.border.small,
  medium: ({ theme }: { theme: ThemeProps }) => theme.border.medium,
};

export const BorderRadius: styledThemeProps = {
  none: ({ theme }: { theme: ThemeProps }) => theme.borderRadius.none,
  small: ({ theme }: { theme: ThemeProps }) => theme.borderRadius.small,
  medium: ({ theme }: { theme: ThemeProps }) => theme.borderRadius.medium,
  large: ({ theme }: { theme: ThemeProps }) => theme.borderRadius.large,
  round: ({ theme }: { theme: ThemeProps }) => theme.borderRadius.round,
};

export const BoxShadow: styledThemeProps = {
  none: ({ theme }: { theme: ThemeProps }) => theme.boxShadow.none,
  small: ({ theme }: { theme: ThemeProps }) => theme.boxShadow.small,
  large: ({ theme }: { theme: ThemeProps }) => theme.boxShadow.large,
  inset: ({ theme }: { theme: ThemeProps }) => theme.boxShadow.inset,
};
