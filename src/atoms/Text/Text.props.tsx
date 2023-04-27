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
  indent?: string;
  children?: React.ReactNode | React.ReactNode[] | string | '';
}
