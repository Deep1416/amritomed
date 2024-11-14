import React from 'react';
import Image from '@components/image/Image';
import followUs from '@assets/followUs.png';
import ContainerWrapper from '@components/wrappers/ContainerWrapper';

const FollowUs: React.FC = () => {
  return (
    <ContainerWrapper title="Follow Us">
      <div>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
          Follow us on social media channels to stay updated with the latest
          treads of Amritomed Pharmaceutical Private Limited.
        </p>
        <Image src={followUs} alt="Follow us image" />
      </div>
    </ContainerWrapper>
  );
};

export default FollowUs;
