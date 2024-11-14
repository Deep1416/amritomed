import React, { useState } from 'react';
import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import Navbar from '@components/navbar/Navbar';
import About from '@pages/about/About';
import FollowUs from '@pages/follow-us/FollowUs';
import Home from '@pages/homepage/Home';
import OurBrands from '@pages/our-brands/OurBrands';
import Team from '@pages/team/Team';
import WhatWeDo from '@pages/what-we-do/WhatWeDo';
import Goals from '@pages/goals/Goals';
import useWindowDimensions from '@hooks/useWindowDimensions';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();

  return (
    <div className="min-h-screen w-full">
      <div className="fixed w-full z-10">
        <Header />
        <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      <div
        className={`flex-1 pt-16 transition-all duration-300 ease-in-out mx-auto ${width > 430 ? (isOpen ? 'pl-4 sm:pl-16' : 'pl-12 sm:pl-48') : 'px-5'}`}
      >
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="what we do">
          <WhatWeDo />
        </section>
        <section id="our team">
          <Team />
        </section>
        <section id="goals">
          <Goals />
        </section>
        <section id="follow us">
          <FollowUs />
        </section>
        <section id="our brands">
          <OurBrands />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default App;
