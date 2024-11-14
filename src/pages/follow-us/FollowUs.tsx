import React from 'react';
import Image from '@components/image/Image';
import followUs from '@assets/followUs.png';

const FollowUs: React.FC = () => {
  return (
    <div className="bg-white container mx-auto px-4 sm:px-6 md:px-10 py-16 text-center flex flex-col items-center justify-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5">
        Follow Us
      </h2>
      <div>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
          Follow us on social media channels to stay updated with the latest
          treads of Amritomed Pharmaceutical Private Limited.
        </p>
        <Image src={followUs} alt="Follow us image" />
      </div>
    </div>
  );
};

export default FollowUs;
