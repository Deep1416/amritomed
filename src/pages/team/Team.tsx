import React from 'react';
import Image from '@components/image/Image';
import team from '@assets/team.png';
import { teamData } from './teamData';
import Cards from '@components/cards/Cards';

const Team: React.FC = () => {
  return (
    <div className="bg-white container mx-auto px-4 sm:px-6 md:px-10 py-16 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5">
        Our Team
      </h2>
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
    </div>
  );
};
export default Team;
