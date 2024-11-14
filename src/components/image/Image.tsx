import React from 'react';

const Image: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return <img src={src} alt={alt} className="rounded-lg mx-auto" />;
};

export default Image;
