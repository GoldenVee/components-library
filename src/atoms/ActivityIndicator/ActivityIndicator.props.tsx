import { CSSProperties, HTMLAttributes } from 'react';

import {
  BarLoader,
  BounceLoader,
  ClipLoader,
  DotLoader,
  FadeLoader,
  PropagateLoader,
  PulseLoader,
  RotateLoader,
  ScaleLoader,
  SkewLoader,
  SquareLoader,
} from 'react-spinners/';

export type IndicatorComponentType =
  | typeof BarLoader
  | typeof BounceLoader
  | typeof ClipLoader
  | typeof DotLoader
  | typeof FadeLoader
  | typeof PropagateLoader
  | typeof PulseLoader
  | typeof RotateLoader
  | typeof ScaleLoader
  | typeof SkewLoader
  | typeof SquareLoader;

export const componentsMap: Record<string, IndicatorComponentType> = {
  bar: BarLoader,
  bounce: BounceLoader,
  clip: ClipLoader,
  dot: DotLoader,
  fade: FadeLoader,
  propagate: PropagateLoader,
  pulse: PulseLoader,
  rotate: RotateLoader,
  scale: ScaleLoader,
  skew: SkewLoader,
  square: SquareLoader,
};

export interface ActivityProps extends HTMLAttributes<HTMLDivElement> {
  indicator?: string;
  loading: boolean;
  speedMultiplier?: number;
  color?: string;
  override?: CSSProperties;
  size?: number | string;
  height?: number | string;
  width?: number | string;
  radius?: number | string;
  ariaLive?: 'polite' | 'assertive' | 'off';
  margin?: number;
}

export interface ActivityIndicatorProps extends ActivityProps {
  indicator?: string;
}
