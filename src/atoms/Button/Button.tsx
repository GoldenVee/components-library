import React from 'react';
import { StyledButton, LabelContainer } from './Button.styles';
import { FullButtonProps } from './Button.props';
import { Media } from '../Media/Media';
import questionCircleIcon from '../../assets/images/question-circle-icon.png';
import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';

const renderMedia = ({
  mediaSrc,
  mediaAlt,
  indicator,
  ...props
}: FullButtonProps): JSX.Element => {
  const {
    color,
    width,
    height,
    indSize,
    speedMultiplier,
    radius,
    ariaLive,
    indMargin,
  } = props;
  if (indicator)
    return (
      <ActivityIndicator
        loading={true}
        indicator={indicator}
        color={color}
        width={width}
        height={height}
        size={indSize}
        speedMultiplier={speedMultiplier}
        radius={radius}
        ariaLive={ariaLive}
        margin={indMargin}
      />
    );
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
}: FullButtonProps): JSX.Element => {
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
      indicator={indicator}
      {...props}
      aria-label={disabled ? `${name} disabled` : name}
      role="button"
    >
      {hasIcon &&
        iconPosition === 'leading' &&
        renderMedia({ mediaSrc, mediaAlt, indicator, ...props })}
      {name && <LabelContainer hasIcon={hasIcon}>{name}</LabelContainer>}
      {hasIcon &&
        iconPosition === 'trailing' &&
        renderMedia({ mediaSrc, mediaAlt, indicator, ...props })}
    </StyledButton>
  );
};

Button.displayName = 'Button';
