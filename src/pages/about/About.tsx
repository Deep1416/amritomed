import ContainerWrapper from '@components/wrappers/ContainerWrapper';
import ParagraphWrapper from '@components/wrappers/ParagraphWrapper';
import React from 'react';

const About: React.FC = () => {
  return (
    <ContainerWrapper title="About us">
      <h3 className="text-lg md:text-xl font-medium mb-5 ">
        A caring and integrated pharmaceutical company.
      </h3>
      <ParagraphWrapper>
        Amritomed Pharmaceutical Private Limited is classified as a Non-government company and is
        registered at Registrar of Companies, ROC Delhi. It is involved in a variety of medicine
        with particular specialization. our team is honored with a highly experienced expertise of
        pharma marketing with twenty and more years
      </ParagraphWrapper>
    </ContainerWrapper>
  );
};

export default About;
