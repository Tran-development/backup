import React from 'react';
import { StyledImage } from './BaseImage.styled';

type CustomImageProps = {
  src: string;
  alt: string;
  height?: number;
  className?: string;
};

const BaseImage = ({ src, alt, height, className = '' }: CustomImageProps) => {
  const style = {
    height: height ? `${height}px` : undefined,
  };
  return (
    <StyledImage src={src} alt={alt} style={style} className={className} />
  );
};

export default BaseImage;
