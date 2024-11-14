import React from 'react';
import Image from '@components/image/Image';
import about from '@assets/about.png';
import ContainerWrapper from '@components/wrappers/ContainerWrapper';
import ParagraphWrapper from '@components/wrappers/ParagraphWrapper';

const WhatWeDo: React.FC = () => {
  return (
    <ContainerWrapper title="What We Do">
      <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-5">Focus to care</h3>
      <div className="flex flex-col items-center justify-center gap-5">
        <ParagraphWrapper>
          Amritomed Pharmaceuticals Pvt Ltd aim to build brands that people love because they
          believe elevating human connections is worth reaching for. Strong portfolio of brands
          supports steady organic revenue and earnings growth through the cycles. We believe to
          buried the art of spirits between business and humanity. Our aim to achieve goals with
          Competitive compensation good culture in organization for employee which develop good
          atmosphere between employee and management we also Celebrate milestones and special
          events.with team Companies that constantly create new products strategies workflows and
          Innovative ideas, encourage us to step up. sharing ideas from field make us innovative, As
          a result we aim to steps toward GOAL.the organization has more opportunities to grow.
        </ParagraphWrapper>
        <Image src={about} alt="What we do image" />
      </div>
    </ContainerWrapper>
  );
};

export default WhatWeDo;
