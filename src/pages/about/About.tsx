import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white container mx-auto px-4 sm:px-6 py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-5">About Us</h2>
      <h3 className="text-lg md:text-xl font-medium mb-5">
        A caring and integrated pharmaceutical company.
      </h3>
      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
        Amritomed Pharmaceutical Private Limited is classified as a
        Non-government company and is registered at Registrar of Companies, ROC
        Delhi. It is involved in a variety of medicine with particular
        specialization. our team is honored with a highly experienced expertise
        of pharma marketing with twenty and more years
      </p>
    </div>
  );
};

export default About;
