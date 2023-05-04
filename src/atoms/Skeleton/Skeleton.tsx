import React from 'react';
import { SkeletonProps } from './Skeleton.props';
import LibSkeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const Skeleton = ({
  count,
  width,
  height,
  borderRadius,
  circle,
  baseColor,
  highlightColor,
  inline,
  duration,
  enableAnimation,
}: SkeletonProps): JSX.Element => {
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
      enableAnimation={prefersReducedMotion ? false : enableAnimation}
    >
      <LibSkeleton count={count} circle={circle} />
    </SkeletonTheme>
  );
};
