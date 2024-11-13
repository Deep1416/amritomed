import React from 'react';

const OurBrands: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Our Brands</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
            className="p-6 bg-gray-50 rounded-lg text-center hover:bg-gray-100"
          >
            <h3 className="text-xl font-semibold text-blue-600">{brand}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBrands;
