import React, { useState, useEffect } from 'react';

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
      {darkTheme ? 'Light' : 'Dark'}
    </button>
  );
};

export default ToggleTheme;
