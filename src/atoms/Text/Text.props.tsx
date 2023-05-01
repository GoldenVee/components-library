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
  indent?: IndentProps;
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
  indent: IndentProps;
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
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl';

export type WeightProps = 'light' | 'base' | 'md' | 'semibold' | 'bold';

export type AlignProps = 'left' | 'right' | 'center';

export type OverflowProps = 'truncate' | 'break' | 'hyphen';

export type IndentProps = 'none' | 'sm' | 'md' | 'lg';
