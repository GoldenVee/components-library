export interface SkeletonProps {
  count?: number;
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
  circle?: boolean;
  baseColor?: string;
  highlightColor?: string;
  inline?: boolean;
  duration?: number;
  enableAnimation?: boolean;
}

export interface StyledSkeletonProps {
  baseColor: string;
}
