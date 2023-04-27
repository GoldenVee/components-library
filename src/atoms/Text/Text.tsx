import React from 'react';
import { TextProps } from './Text.props';
import { StyledText } from './Text.styles';

const getRole = ({ role }: TextProps) => {
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
  role,
  size,
  weight,
  color,
  allCaps,
  stylize,
  align,
  overflow,
  indent,
  children,
  ...props
}: TextProps): JSX.Element => {
  return (
    <StyledText
      as={getRole({ role })}
      role={role ? role : 'p'}
      family={family}
      size={size}
      weight={weight}
      color={color ? color : 'base'}
      allCaps={allCaps}
      stylize={stylize}
      align={align}
      overflow={overflow}
      indent={indent}
      {...props}
    >
      {children}
    </StyledText>
  );
};
