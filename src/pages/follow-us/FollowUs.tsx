import React from 'react';
import Image from '@components/image/Image';
import followUs from '@assets/followUs.png';
import ContainerWrapper from '@components/wrappers/ContainerWrapper';
import ParagraphWrapper from '@components/wrappers/ParagraphWrapper';

const FollowUs: React.FC = () => {
  return (
    <ContainerWrapper title="Follow Us">
      <div className="flex flex-col items-center justify-center gap-5">
        <ParagraphWrapper>
          Follow us on social media channels to stay updated with the latest treads of Amritomed
          Pharmaceutical Private Limited.
        </ParagraphWrapper>
        <Image src={followUs} alt="Follow us image" />
      </div>
    </ContainerWrapper>
  );
};

export default FollowUs;
