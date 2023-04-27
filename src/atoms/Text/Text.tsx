import React from 'react';
import { TextProps } from './Text.props';
import { StyledText } from './Text.styles';

const getRole = (role: string) => {
  switch (role) {
    case 'blockquote':
      return 'blockquote';
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'ul':
      return 'ul';
    case 'ol':
      return 'ol';
    case 'li':
      return 'li';
    default:
      return 'p';
  }
};

export const Text = ({
  family,
  role = 'p',
  size,
  weight,
  color = 'base',
  allCaps = false,
  stylize,
  align = 'start',
  overflow = 'break',
  indent = 'none',
  children,
  ...props
}: TextProps): JSX.Element => {
  console.log(color);
  return (
    <StyledText
      as={getRole(role)}
      role={role}
      family={family ? family : role}
      size={size ? size : role}
      weight={weight ? weight : role}
      color={color}
      allCaps={allCaps}
      stylize={stylize ? stylize : role}
      align={align}
      overflow={overflow}
      indent={indent}
      {...props}
    >
      {children}
    </StyledText>
  );
};
