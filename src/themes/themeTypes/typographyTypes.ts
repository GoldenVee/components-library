export interface TypographyProps {
  fontFamily: FontFamilyProps;
  size: FontSizeProps;
  lineHeight: FontLHProps;
  weight: WeightProps;
  btn: ButtonTextProps;
}

export interface FontFamilyProps {
  serif: string;
  sansSerif: string;
  monospace: string;
  primaryHeader: string;
  secondaryHeader: string;
  tertiaryHeader: string;
  quaternaryHeader: string;
  lead: string;
  body: string;
  subtext: string;
  cambria?: string;
  georgia?: string;
  arial?: string;
  helveticaNeue?: string;
  roboto?: string;
  courierNew?: string;
  menlo?: string;
  monaco?: string;
}
export interface FontSizeProps {
  xs: string;
  sm: string;
  base: string;
  lg: string;
  xl: string;
  xxl: string;
  xxxl: string;
  ivxl: string;
  vxl: string;
}
export interface FontLHProps {
  xs: string;
  sm: string;
  base: string;
  lg: string;
  xl: string;
  xxl: string;
  xxxl: string;
  ivxl: string;
  vxl: string;
}

export interface WeightProps {
  light: string;
  base: string;
  md: string;
  semibold: string;
  bold: string;
}

// button text
export interface ButtonTextProps {
  xs: string;
  sm: string;
  base: string;
  ml: string;
  lg: string;
  xl: string;
  lineHeight: BtnLHProps;
}

interface BtnLHProps {
  xs: string;
  sm: string;
  base: string;
  ml: string;
  lg: string;
  xl: string;
}
