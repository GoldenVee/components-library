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
  border?: 'none' | 'sm' | 'md';
  borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'round';
  boxShadow?: 'none' | 'sm' | 'lg' | 'inset';
  fullWidth?: boolean;
  disabled?: boolean;
  iconPosition?: 'leading' | 'trailing';
  mediaSrc?: string | '';
  mediaAlt?: string | '';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
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
