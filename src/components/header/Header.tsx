import React from 'react';
import logo from '@assets/logo.png';
// import ToggleTheme from '@components/toggleTheme/ToggleTheme';

const Header: React.FC = () => {
  return (
    <div className="w-full h-16 bg-slate-800 text-light flex justify-between items-center p-4 border-b border-gray-600">
      <div className="flex items-center justify-start gap-3">
        <img src={logo} alt="Amritomed Logo" className="w-8 h-8 object-contain rounded-full" />
        <span className="text-xl md:text-2xl font-medium">AMRITOMED</span>
      </div>
      {/* <div>
        <ToggleTheme />
      </div> */}
    </div>
  );
};

export default Header;
