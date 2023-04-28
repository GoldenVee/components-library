import React from 'react';
import { TextProps } from './Text.props';
import { StyledText } from './Text.styles';

const getRole = (role: string) => {
  if (role === 'h1') return 'h1';
  if (role === 'h2') return 'h2';
  if (role === 'h3') return 'h3';
  if (role === 'h4') return 'h4';
  if (role === 'ul') return 'ul';
  if (role === 'ol') return 'ol';
  if (role === 'li') return 'li';
  else return 'p';
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
  return (
    <StyledText
      as={getRole(role)}
      role={role}
      family={family ? family : role}
      size={size ? size : role}
      weight={weight ? weight : role}
      color={color ? color : 'base'}
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
