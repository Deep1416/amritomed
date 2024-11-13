import React from 'react';
import Image from '../../components/image/Image';
import followUs from '../../assets/followUs.png';

const FollowUs: React.FC = () => {
  return (
    <div className="bg-white container mx-auto px-6 py-16 text-center flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center mb-5">Follow Us</h2>
      <div className="px-10">
        <p className="text-gray-600 leading-relaxed mb-10 text-lg">
          Follow us on social media channels to stay updated with the latest
          treads of Amritomed Pharmaceutical Private Limited.
        </p>

        <Image src={followUs} alt="Follow us image" />
      </div>
    </div>
  );
};

export default FollowUs;
