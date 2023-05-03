import React from 'react';
import { StyledButton, LabelContainer } from './Button.styles';
import { ButtonProps } from './Button.props';
import { Media } from '../Media/Media';
import questionCircleIcon from '../../assets/images/question-circle-icon.png';
import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';

const renderMedia = ({
  mediaSrc,
  mediaAlt,
  indicator,
}: ButtonProps): JSX.Element => {
  if (indicator) return <ActivityIndicator loading={true} indicator="fade" />;
  return (
    <Media
      mediaSrc={mediaSrc ? mediaSrc : questionCircleIcon}
      altText={mediaAlt ? mediaAlt : questionCircleIcon}
      width="icon"
    />
  );
};

export const Button = ({
  name,
  size = 'medium',
  variant = 'primary',
  border = 'small',
  borderRadius = 'medium',
  boxShadow = 'small',
  fullWidth = false,
  hasIcon = false,
  iconPosition = 'leading',
  mediaSrc = '',
  mediaAlt = '',
  disabled = false,
  indicator,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  return children ? (
    <button>{children}</button>
  ) : (
    <StyledButton
      size={size}
      variant={variant}
      border={border}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      fullWidth={fullWidth}
      hasIcon={hasIcon}
      iconPosition={iconPosition}
      disabled={disabled}
      {...props}
      aria-label={disabled ? `${name} disabled` : name}
      role="button"
    >
      {hasIcon &&
        iconPosition === 'leading' &&
        renderMedia({ mediaSrc, mediaAlt, indicator })}
      {name && <LabelContainer hasIcon={hasIcon}>{name}</LabelContainer>}
      {hasIcon &&
        iconPosition === 'trailing' &&
        renderMedia({ mediaSrc, mediaAlt, indicator })}
    </StyledButton>
  );
};

Button.displayName = 'Button';
