import React from 'react';

const OurBrands: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-10 py-20 bg-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
        Our Brands
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {[
          'AMIGEST',
          'CRAMPMOL',
          'FERTICEIVE',
          'ISORINE',
          'MYOTOVA',
          'NORMITRO',
        ].map((brand) => (
          <div
            key={brand}
            className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-blue-600">
              {brand}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBrands;
