import React from 'react';
import Image from '@components/image/Image';
import mission from '@assets/mission.png';
import { goalsData } from './goalsData';
import Cards from '@components/cards/Cards';

const Goals: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Goals</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-10">
        {goalsData.map(({ title, description }, index) => (
          <Cards key={index} title={title} description={description} />
        ))}
      </div>
      <Image src={mission} alt="Mission Image" />
    </div>
  );
};

export default Goals;
