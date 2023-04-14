import React, { forwardRef, ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import { StyledButtonOne } from './Button.styles';

export interface ButtonProps {
  name: string;
  children?: React.ReactNode;
}
export type Ref = HTMLButtonElement;

export const Button = forwardRef<Ref, ComponentPropsWithoutRef<'button'>>(
  ({ children, name, ...props }, ref) => (
    <StyledButtonOne>This is a test button</StyledButtonOne>
  ),
);

Button.displayName = 'Button';
