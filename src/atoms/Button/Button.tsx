import React, { forwardRef, ComponentPropsWithoutRef } from 'react';

export interface ButtonProps {
  name: string;
  children?: React.ReactNode;
}
export type Ref = HTMLButtonElement;

export const Button = forwardRef<Ref, ComponentPropsWithoutRef<'button'>>(
  ({ children, name, ...props }, ref) => (
    <button
      type="button"
      ref={ref}
      className={'bg-yellow-100 rounded-full border-2 p-2'}
      {...props}
    >
      {name}
    </button>
  ),
);

Button.displayName = 'Button';
