import React from 'react';
import about from '../../assets/about.png';
import Image from '../../components/image/Image';

const About: React.FC = () => {
  return (
    <div className="bg-white container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-5">About Us</h2>
      <h2 className="text-xl font-medium text-center mb-5">
        A caring and integrated pharmaceutical company.
      </h2>
      <div className="px-10">
        <p className="text-gray-600 leading-relaxed mb-10 text-lg">
          Amritomed Pharmaceutical Private Limited is classified as Non-
          government company and is registered at Registrar of Companies, ROC
          Delhi. It is involved in a variety of medicine with particular
          specialization. our team is honored with a highly experienced
          expertise of pharma marketing with twenty and more years
        </p>

        <Image src={about} alt="About Us" />
      </div>
    </div>
  );
};

export default About;
