import ContainerWrapper from '@components/wrappers/ContainerWrapper';
import React from 'react';

const OurBrands: React.FC = () => {
  return (
    <ContainerWrapper title="Our Brands">
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
    </ContainerWrapper>
  );
};

export default OurBrands;
