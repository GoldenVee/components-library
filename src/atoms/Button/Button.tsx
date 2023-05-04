import React from 'react';
import { StyledButton, LabelContainer, StyledIndicator } from './Button.styles';
import { FullButtonProps } from './Button.props';
import { Media } from '../Media/Media';
import questionCircleIcon from '../../assets/images/question-circle-icon.png';

const MediaButton = ({
  mediaSrc,
  mediaAlt,
  size,
  variant,
  isLoading,
}: FullButtonProps): JSX.Element => {
  if (isLoading) return <StyledIndicator size={size} variant={variant} />;
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
  size = 'base',
  variant = 'primary',
  border = 'sm',
  borderRadius = 'md',
  boxShadow = 'sm',
  fullWidth = false,
  iconPosition,
  mediaSrc = undefined,
  mediaAlt = '',
  isLoading = false,
  disabled = false,
  children,
  ...props
}: FullButtonProps): JSX.Element => {
  const showIcon = isLoading || !!mediaSrc;

  if (children) return <button>{children}</button>;
  return (
    <StyledButton
      size={size}
      variant={variant}
      border={border}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      fullWidth={fullWidth}
      disabled={disabled}
      {...props}
      aria-label={disabled ? `${name} disabled` : name}
      role="button"
    >
      {iconPosition === 'leading' && showIcon && (
        <MediaButton
          mediaSrc={mediaSrc}
          mediaAlt={mediaAlt}
          isLoading={isLoading}
          size={size}
          variant={variant}
          width="icon"
        />
      )}
      {name && <LabelContainer mediaSrc={mediaSrc}>{name}</LabelContainer>}
      {iconPosition === 'trailing' && showIcon && (
        <MediaButton
          mediaSrc={mediaSrc}
          mediaAlt={mediaAlt}
          isLoading={isLoading}
          size={size}
          variant={variant}
          width="icon"
        />
      )}
    </StyledButton>
  );
};

Button.displayName = 'Button';
