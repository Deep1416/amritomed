import React from 'react';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <div className="w-full h-16 bg-slate-800 text-white flex items-center justify-start gap-3 p-4 border-b border-gray-600">
      <img
        src={logo}
        alt="Amritomed Logo"
        className="w-10 h-10 object-contain"
      />
      <span className="text-3xl font-semibold">AMRITOMED</span>
    </div>
  );
};

export default Header;
