import React, { useState, useEffect } from 'react';
import { MdLightMode, MdOutlineDarkMode } from 'react-icons/md';

const ToggleTheme: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkTheme]);

  return (
    <button onClick={() => setDarkTheme(!darkTheme)}>
      {darkTheme ? <MdLightMode size={30} /> : <MdOutlineDarkMode size={30} />}
    </button>
  );
};

export default ToggleTheme;
