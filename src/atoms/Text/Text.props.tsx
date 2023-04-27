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
  margin?: string;
  padding?: string;
  style?: React.CSSProperties;
  children: React.ReactNode | React.ReactNode[] | string;
}
export interface StyledTextProps {
  family: string;
  size: string;
  weight: string;
  color: string;
  allCaps: boolean;
  stylize: string;
  align: string;
  overflow: string;
  indent: string;
}
