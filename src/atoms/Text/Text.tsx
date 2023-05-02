import React from 'react';
import { RoleProps, TextProps } from './Text.props';
import { StyledText } from './Text.styles';

const getRole = (role: RoleProps) => {
  return role || 'p';
};

export const Text = ({
  family,
  role = 'p',
  size,
  weight,
  color = 'base',
  allCaps = false,
  stylize,
  align = 'left',
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
