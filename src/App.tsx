import React, { useState } from 'react';
import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import Navbar from '@components/navbar/Navbar';
import About from '@pages/about/About';
import FollowUs from '@pages/follow-us/FollowUs';
import Home from '@pages/homepage/Home';
import OurBrands from '@pages/our-brands/OurBrands';
import Team from '@pages/team/Team';
import Vision from '@pages/vision/Vision';
import WhatWeDo from '@pages/what-we-do/WhatWeDo';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen w-full">
      <div className="fixed w-full">
        <Header />
        <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      <div
        className={`flex-1 pt-24 transition-all duration-300 ease-in-out mx-auto ${isOpen ? 'pl-16' : 'pl-48'}`}
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
          <Vision />
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
