import React from 'react';

const ParagraphWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <p className="text-gray-600 text-sm md:text-base leading-relaxed px-10">{children}</p>;
};

export default ParagraphWrapper;
