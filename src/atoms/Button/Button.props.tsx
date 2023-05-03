import { ComponentPropsWithRef } from 'react';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  name?: string | '';
  size?: 'xs' | 'small' | 'medium' | 'ml' | 'large' | 'xl';
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'quarterary'
    | 'transparent'
    | 'confirm'
    | 'destroy'
    | 'gradient';
  border?: 'none' | 'small' | 'medium';
  borderRadius?: 'none' | 'small' | 'medium' | 'large' | 'round';
  boxShadow?: 'none' | 'small' | 'large' | 'inset';
  fullWidth?: boolean;
  disabled?: boolean;
  hasIcon?: boolean;
  iconPosition?: 'leading' | 'trailing';
  indicator?: string;
  mediaSrc?: string | '';
  mediaAlt?: string | '';
  children?: React.ReactNode;
}

export interface FullButtonProps extends ButtonProps {
  loading?: boolean;
  speedMultiplier?: number;
  color?: string;
  indSize?: number | string;
  height?: number | string;
  width?: number | string;
  radius?: number | string;
  ariaLive?: 'polite' | 'assertive' | 'off';
  indMargin?: number;
}
