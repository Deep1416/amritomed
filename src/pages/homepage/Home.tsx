import React from 'react';
import logo from '@assets/logo.png';
import landing from '@assets/landing.png';
import Image from '@components/image/Image';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto min-h-screen bg-white">
      <div className="text-center mb-8">
        <h1 className="text-primary text-2xl sm:text-4xl md:text-6xl font-bold mb-4">
          AMRITOMED
        </h1>
        <h2 className="text-secondary text-xl sm:text-2xl md:text-4xl font-semibold">
          PHARMACEUTICAL PRIVATE LIMITED
        </h2>
      </div>
      <div className="flex justify-center my-12">
        <img
          src={logo}
          alt="Amritomed Logo"
          className="w-24 h-24 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain"
        />
      </div>
      <div className="text-center mt-8 mb-12">
        <h2 className="text-secondary text-3xl md:text-5xl lg:text-6xl font-bold">
          Amritomed
        </h2>
      </div>
      <div className="text-center">
        <h3 className="text-accent text-xl md:text-3xl lg:text-4xl font-script italic">
          Better healing better life
        </h3>
      </div>
      <div className="flex justify-center my-12 w-full">
        <Image src={landing} alt="Amritomed Logo" />
      </div>
    </div>
  );
};

export default Home;
