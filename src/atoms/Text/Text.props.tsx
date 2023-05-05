export interface TextProps {
  family?: string;
  role?: RoleProps;
  size?: SizeProps;
  weight?: WeightProps;
  color?: string;
  allCaps?: boolean;
  stylize?: string;
  align?: AlignProps;
  overflow?: OverflowProps;
  style?: React.CSSProperties;
  children: React.ReactNode | React.ReactNode[] | string;
}
export interface StyledTextProps {
  family: string | RoleProps;
  size: SizeProps | RoleProps;
  weight: WeightProps | RoleProps;
  color: string;
  allCaps: boolean;
  stylize: string;
  align: AlignProps;
  overflow: OverflowProps;
}

export type RoleProps =
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'ol'
  | 'ul'
  | 'li'
  | 'a'
  | 'blockquote';

export type SizeProps =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'ivxl'
  | 'vxl';

export type WeightProps = 'light' | 'base' | 'md' | 'semibold' | 'bold';

export type AlignProps = 'left' | 'right' | 'center';

export type OverflowProps = 'break' | 'hyphen';
