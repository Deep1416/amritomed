import React from 'react';
import Image from '@components/image/Image';
import mission from '@assets/mission.png';
import { goalsData } from './goalsData';
import Cards from '@components/cards/Cards';
import ContainerWrapper from '@components/wrappers/ContainerWrapper';

const Goals: React.FC = () => {
  return (
    <ContainerWrapper title="Goals">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
        {goalsData.map(({ id, title, description }, index) => (
          <Cards key={index} id={id} title={title} description={description} />
        ))}
      </div>
      <Image src={mission} alt="Mission Image" />
    </ContainerWrapper>
  );
};

export default Goals;
