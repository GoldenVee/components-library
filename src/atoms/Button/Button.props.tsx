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
  mediaSrc?: string | '';
  mediaAlt?: string | '';
  indicator?: string;
  children?: React.ReactNode;
}
