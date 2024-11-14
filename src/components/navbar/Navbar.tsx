import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { RiInformationLine, RiTeamLine } from 'react-icons/ri';
import { GoGoal } from 'react-icons/go';
import { FaHandHoldingMedical } from 'react-icons/fa';
import { FaHouseMedical } from 'react-icons/fa6';
import { SlUserFollow } from 'react-icons/sl';
import useWindowDimensions from '@hooks/useWindowDimensions';

type MenuItem = {
  name: string;
  icon: React.ReactNode;
};

const menuItems: MenuItem[] = [
  { name: 'home', icon: <FaHouseMedical size={20} /> },
  { name: 'about', icon: <RiInformationLine size={20} /> },
  { name: 'what we do', icon: <RiTeamLine size={20} /> },
  { name: 'our team', icon: <RiTeamLine size={20} /> },
  { name: 'goals', icon: <GoGoal size={20} /> },
  { name: 'follow us', icon: <SlUserFollow size={20} /> },
  { name: 'our brands', icon: <FaHandHoldingMedical size={20} /> },
];

const Navbar: React.FC<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isOpen, setIsOpen }) => {
  const [activeSection, setActiveSection] = useState('home');
  const { width } = useWindowDimensions();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`bg-slate-800 text-light shadow-lg ${isOpen ? 'w-16' : 'w-48'} transition-all duration-300 flex ${width > 430 ? 'flex-col h-screen items-start px-3 py-2' : 'fixed bottom-0 w-full flex-row justify-around items-center h-16'} space-y-2`}
    >
      <button
        className={`p-2 rounded hover:bg-gray-700 transition-colors ${width > 430 ? '' : 'hidden'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiChevronRight size={24} /> : <FiChevronLeft size={24} />}
      </button>
      {menuItems.map((item, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(item.name)}
          className={`capitalize ${activeSection === item.name ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-light'} flex items-center justify-start gap-3 p-2 rounded hover:bg-gray-700 transition-colors ${isOpen ? '' : 'w-36'}`}
        >
          <div>{item.icon}</div>
          {!isOpen && width > 430 && <span>{item.name}</span>}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
