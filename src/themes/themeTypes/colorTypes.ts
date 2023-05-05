export interface ColorProps {
  bglvl0: string;
  // variant colors
  primary: string;
  primeAccent: string;
  secondary: string;
  secondAccent: string;
  tertiary: string;
  tertAccent: string;
  quaternary: string;
  quatAccent: string;
  transparent: string;
  trAccent: string;
  gradient: string;
  gradAccent: string;

  // utility colors
  confirm: string;
  cfmAccent: string;
  warning: string;
  warnAccent: string;
  destroy: string;
  dstrAccent: string;

  // text colors
  font: FontColorProps;
}

export interface FontColorProps {
  primary: string;
  secondary: string;
  tertiary: string;
  contrast: string;
  interactive: string;
  heading: HeadingColorProps;
  btn: BtnTextColorProps;
}

export interface HeadingColorProps {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
}

export interface BtnTextColorProps {
  primary: string;
  primeAccent: string;
  secondary: string;
  secondAccent: string;
  tertiary: string;
  tertAccent: string;
  quaternary: string;
  quatAccent: string;
  transparent: string;
  trAccent: string;
  gradient: string;
  gradAccent: string;

  // utility colors
  confirm: string;
  cfmAccent: string;
  warning: string;
  warnAccent: string;
  destroy: string;
  dstrAccent: string;
}
