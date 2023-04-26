import styled, { css } from 'styled-components';
import tw, { TwStyle } from 'twin.macro';
import { MediaProps } from './Media.props';

const widthStyles = () => css`
  width: ${({ width = '1/2' }: MediaProps) => (width ? Sizes[width] : width)};
`;

export const StyledMedia = styled.img<MediaProps>(() => [
  tw`max-w-screen-2xl h-min`,
  widthStyles(),
]);

export const Sizes: TwStyle = {
  auto: 'auto',
  icon: '1.2rem',
  xs: '4.6rem',
  small: '10rem',
  ml: '11.25rem',
  medium: '20rem',
  mlg: '30rem',
  large: '45rem',
  xl: '60rem',
  full: '100%',
};
