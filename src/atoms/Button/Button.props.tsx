import { ComponentPropsWithRef } from 'react';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  name?: string | '';
  size?: 'xs' | 'sm' | 'base' | 'ml' | 'lg' | 'xl';
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'quaternary'
    | 'transparent'
    | 'confirm'
    | 'destroy'
    | 'gradient';
  border?: 'none' | 'sm' | 'base' | 'lg';
  borderRadius?: 'none' | 'sm' | 'base' | 'lg' | 'round';
  boxShadow?: 'none' | 'sm' | 'lg' | 'inset';
  fullWidth?: boolean;
  disabled?: boolean;
  iconPosition?: 'leading' | 'trailing';
  mediaSrc?: string | '';
  mediaAlt?: string | '';
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface StyledButtonProps {
  size?: 'xs' | 'sm' | 'base' | 'ml' | 'lg' | 'xl';
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'quaternary'
    | 'transparent'
    | 'confirm'
    | 'destroy'
    | 'gradient';
  border?: 'none' | 'sm' | 'base' | 'lg';
  borderRadius?: 'none' | 'sm' | 'base' | 'lg' | 'round';
  boxShadow?: 'none' | 'sm' | 'lg' | 'inset';
  disabled: boolean;
  fullWidth: boolean;
}

export interface VariantProps {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  transparent: string;
  confirm: string;
  destroy: string;
  gradient: string;
}
export interface SizeProps {
  xs: string;
  sm: string;
  base: string;
  ml: string;
  lg: string;
  xl: string;
}

export interface PaddingSizeProps {
  xs: string;
  sm: string;
  base: string;
  ml: string;
  lg: string;
  xl: string;
}
export interface BorderProps {
  none: string;
  sm: string;
  base: string;
  lg: string;
}
export interface BorderRadiusProps {
  none: string;
  sm: string;
  base: string;
  lg: string;
  round: string;
}
export interface BoxShadowProps {
  none: string;
  sm: string;
  lg: string;
  inset: string;
}

export interface FullButtonProps extends ButtonProps {
  isLoading?: boolean;
  speedMultiplier?: number;
  color?: string;
  indSize?: number | string;
  height?: number | string;
  width?: number | string;
  radius?: number | string;
  ariaLive?: 'polite' | 'assertive' | 'off';
  indMargin?: number;
}
