import React from 'react';
import logo from '@assets/logo.png';
import ToggleTheme from '@components/toggleTheme/ToggleTheme';

const Header: React.FC = () => {
  return (
    <div className="w-full h-16 bg-slate-800 text-light flex justify-between items-center p-4 border-b border-gray-600">
      <div className="flex items-center justify-start gap-3">
        <img
          src={logo}
          alt="Amritomed Logo"
          className="w-10 h-10 object-contain"
        />
        <span className="text-xl md:text-3xl font-semibold">AMRITOMED</span>
      </div>
      <div>
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Header;
