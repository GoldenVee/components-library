import React from 'react';
import { PlaceholderProps } from './Placeholder.props';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export const Placeholder = ({
  count,
  width,
  height,
  borderRadius,
  circle,
  baseColor,
  highlightColor,
  inline,
  duration,
  direction,
  enableAnimation,
}: PlaceholderProps): JSX.Element => {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <SkeletonTheme
      width={width ? width : 150}
      height={height}
      borderRadius={borderRadius}
      baseColor={baseColor ? baseColor : '#94a3b8'}
      highlightColor={highlightColor ? highlightColor : '#cbd5e1'}
      inline={inline}
      duration={duration}
      direction={direction}
      enableAnimation={prefersReducedMotion ? false : enableAnimation}
    >
      <Skeleton count={count} circle={circle} />
    </SkeletonTheme>
  );
};
