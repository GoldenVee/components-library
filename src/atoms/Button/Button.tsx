import React, { forwardRef, ComponentPropsWithoutRef } from 'react';
import { StyledButton, LabelContainer } from './Button.styles';
import { ButtonProps } from './Button.props';
import { Media } from '../Media/Media';
import questionCircleIcon from '../../assets/images/question-circle-icon.png';

export type Ref = HTMLButtonElement;

const renderMedia = ({ mediaSrc, mediaAlt }: ButtonProps): JSX.Element => {
  return (
    <Media
      mediaSrc={mediaSrc ? mediaSrc : questionCircleIcon}
      altText={mediaAlt ? mediaAlt : questionCircleIcon}
      width="icon"
    />
  );
};

export const Button = forwardRef<Ref, ComponentPropsWithoutRef<'button'>>(
  (
    {
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
      children,
      onClick,
      ...props
    }: ButtonProps,
    ref,
  ): JSX.Element => {
    return children ? (
      <button onClick={onClick}>{children}</button>
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
        onClick={onClick}
        ref={ref}
        {...props}
        aria-label={disabled ? `${name} disabled` : name}
        role="button"
      >
        {hasIcon &&
          iconPosition === 'leading' &&
          renderMedia({ mediaSrc, mediaAlt })}
        {name && <LabelContainer hasIcon={hasIcon}>{name}</LabelContainer>}
        {hasIcon &&
          iconPosition === 'trailing' &&
          renderMedia({ mediaSrc, mediaAlt })}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';
