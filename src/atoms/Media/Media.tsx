import React from 'react';
import { MediaProps } from './Media.props';
import { StyledMedia } from './Media.styles';

export const Media = ({
  title,
  mediaSrc = 'https://via.placeholder.com/600x400/364987/ffffff?text=Placeholder',
  altText = 'placeholder image',
  width = 'ml',
}: MediaProps): JSX.Element => {
  return (
    <StyledMedia
      title={title}
      src={mediaSrc}
      alt={altText}
      width={width}
      role="img"
    />
  );
};

Media.displayName = 'Media';
