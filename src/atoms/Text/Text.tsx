import React from 'react';
import { TextProps } from './Text.props';
import { StyledText } from './Text.styles';

const getRole = ({ role }: TextProps) => {
  switch (role) {
    case 'blockquote':
      return 'blockquote';
    case 'code':
      return 'code';
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    default:
      return 'p';
  }
};

export const Text = ({
  family,
  role,
  size,
  weight,
  color,
  allCaps,
  stylize,
  align,
  overflow,
  children,
  ...props
}: TextProps): JSX.Element => {
  return (
    <StyledText
      as={getRole({ role })}
      family={family}
      size={size}
      weight={weight}
      color={color ? color : 'base'}
      allCaps={allCaps}
      stylize={stylize}
      align={align}
      overflow={overflow}
      {...props}
    >
      {children}
    </StyledText>
  );
};
