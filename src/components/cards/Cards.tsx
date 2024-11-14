import React from 'react';

const Cards: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
      <h3 className="text-lg font-medium mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Cards;
