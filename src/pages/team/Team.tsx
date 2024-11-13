import React from 'react';
import Image from '../../components/image/Image';
import team from '../../assets/team.png';
import { teamData } from './teamData';
import Cards from '../../components/cards/Cards';

const Team: React.FC = () => {
  return (
    <div className="bg-white container mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-bold text-center mb-5">Our Team</h2>
      <div className="px-10">
        <p className="text-gray-600 leading-relaxed mb-10 text-lg px-40">
          We work hard with a happy heart, we will be able to get very close to
          success. Always have faith in yourself. We can do anything, everything
          is possible. .
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-10">
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
