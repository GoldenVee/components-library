export interface TextProps {
  family?: string;
  role?: string;
  size?: string;
  weight?: string;
  color?: string;
  allCaps?: boolean;
  stylize?: string;
  align?: string;
  overflow?: string;
  children?: React.ReactNode | React.ReactNode[] | string | '';
}
