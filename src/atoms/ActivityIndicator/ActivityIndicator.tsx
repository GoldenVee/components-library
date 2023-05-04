import React from 'react';
import {
  ActivityIndicatorProps,
  componentsMap,
} from './ActivityIndicator.props';

export const ActivityIndicator = ({
  indicator = 'bar',
  loading = false,
  speedMultiplier,
  color = '#3b82f6',
  override,
  size,
  ariaLive = 'polite',
  height,
  width,
  radius,
  margin,
  ...props
}: ActivityIndicatorProps): JSX.Element => {
  const IndicatorComponent: React.FC<ActivityIndicatorProps> = ({
    indicator = 'bar',
    ...props
  }) => {
    const Indicator = componentsMap[indicator];
    return <Indicator {...props} />;
  };

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <IndicatorComponent
      indicator={indicator}
      loading={loading}
      speedMultiplier={prefersReducedMotion ? 0.1 : speedMultiplier}
      color={color}
      override={override}
      size={size}
      margin={margin}
      height={height}
      width={width}
      radius={radius}
      aria-busy={loading}
      aria-live={ariaLive}
      aria-label={loading ? 'loading' : ''}
      role="alertdialog"
      {...props}
    />
  );
};
