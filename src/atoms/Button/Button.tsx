import React, { forwardRef, ComponentPropsWithoutRef } from 'react';
import { StyledButton } from './Button.styles';
import { ButtonProps } from './Button.props';
import { BeakerIcon } from '@heroicons/react/24/outline';

export type Ref = HTMLButtonElement;

const renderMedia = ({ mediaSrc, mediaAlt }: ButtonProps): JSX.Element => {
  return (
    <BeakerIcon className="h-5 w-5 mx-1 text-yellow-500 mix-blend-difference" />
  );
};

const handleClick = ({ disabled, onClick }: ButtonProps) => {
  return disabled ? undefined : onClick;
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
      <button onClick={handleClick({ disabled, onClick })}>{children}</button>
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
        mediaSrc={mediaSrc}
        mediaAlt={mediaAlt}
        disabled={disabled}
        onClick={handleClick({ disabled, onClick })}
        ref={ref}
        {...props}
        aria-label={name}
      >
        {hasIcon &&
          iconPosition === 'leading' &&
          renderMedia({ mediaSrc, mediaAlt })}
        {name}
        {hasIcon &&
          iconPosition === 'trailing' &&
          renderMedia({ mediaSrc, mediaAlt })}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';
