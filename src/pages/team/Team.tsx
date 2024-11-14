import React from 'react';
import Image from '@components/image/Image';
import team from '@assets/team.png';
import { teamData } from './teamData';
import Cards from '@components/cards/Cards';
import ContainerWrapper from '@components/wrappers/ContainerWrapper';
import ParagraphWrapper from '@components/wrappers/ParagraphWrapper';

const Team: React.FC = () => {
  return (
    <ContainerWrapper title="Our team">
      <ParagraphWrapper>
        We work hard with a happy heart, we will be able to get very close to success. Always have
        faith in yourself. We can do anything, everything is possible.
      </ParagraphWrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-10">
        {teamData.map(({ title, description }, index) => (
          <Cards key={index} title={title} description={description} />
        ))}
      </div>
      <Image src={team} alt="Our team image" />
    </ContainerWrapper>
  );
};
export default Team;
