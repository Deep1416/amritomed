import React from 'react';
import Image from '@components/image/Image';
import team from '@assets/team.png';
import { teamData } from './teamData';
import Cards from '@components/cards/Cards';
import ContainerWrapper from '@components/wrappers/ContainerWrapper';

const Team: React.FC = () => {
  return (
    <ContainerWrapper title="Our team">
      <div>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-10 px-2 sm:px-10">
          We work hard with a happy heart, we will be able to get very close to
          success. Always have faith in yourself. We can do anything, everything
          is possible.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          {teamData.map(({ title, description }, index) => (
            <Cards key={index} title={title} description={description} />
          ))}
        </div>
        <Image src={team} alt="Our team image" />
      </div>
    </ContainerWrapper>
  );
};
export default Team;
