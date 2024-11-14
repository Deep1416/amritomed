import React from 'react';
import logo from '@assets/logo.png';
import landing from '@assets/landing.png';
import Image from '@components/image/Image';
import ContainerWrapper from '@components/wrappers/ContainerWrapper';

const Home: React.FC = () => {
  return (
    <ContainerWrapper>
      <div className="text-center mb-8">
        <h1 className="text-primary text-2xl sm:text-3xl md:text-5xl font-bold mb-4">AMRITOMED</h1>
        <h2 className="text-secondary text-xl sm:text-2xl md:text-3xl font-semibold">
          PHARMACEUTICAL PRIVATE LIMITED
        </h2>
      </div>
      <div className="flex justify-center items-center my-12">
        <img
          src={logo}
          alt="Amritomed Logo"
          className="w-24 h-24 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain"
        />
      </div>
      <div className="text-center mt-8 mb-10">
        <h2 className="text-secondary text-3xl md:text-5xl lg:text-6xl font-bold">AMRITOMED</h2>
      </div>
      <div className="text-center mb-8">
        <h3 className="text-accent text-lg md:text-2xl lg:text-3xl font-script">
          Better healing better life
        </h3>
      </div>
      <Image src={landing} alt="Amritomed Logo" />
    </ContainerWrapper>
  );
};

export default Home;
