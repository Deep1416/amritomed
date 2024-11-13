import React, { useState } from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/about/About';
import Vision from './pages/vision/Vision';
import Products from './pages/products/Products';
import ContactUs from './pages/contact/ContactUs';
import Team from './pages/team/Team';

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
        <section id="team">
          <Team />
        </section>
        <section id="vision">
          <Vision />
        </section>
        <section id="products">
          <Products />
        </section>
        <section id="contact">
          <ContactUs />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default App;
