import { ComponentPropsWithRef } from 'react';

export interface MediaProps extends ComponentPropsWithRef<'img'> {
  title?: string;
  mediaSrc?: string;
  altText?: string;
  width?: string;
  children?: React.ReactNode;
}
