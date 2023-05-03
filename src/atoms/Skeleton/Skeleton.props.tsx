export interface PlaceholderProps {
  count?: number;
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
  circle?: boolean;
  baseColor?: string;
  highlightColor?: string;
  inline?: boolean;
  duration?: number;
  direction?: 'rtl' | 'ltr';
  enableAnimation?: boolean;
}

export interface StyledPlaceholderProps {
  baseColor: string;
}
