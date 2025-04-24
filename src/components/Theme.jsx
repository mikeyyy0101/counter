import React from 'react';

const Theme = ({ theme, setTheme }) => {
  const handleTheme = () => {
    setTheme((prev) => !prev); // Toggle theme
  };

  return (
    <button
      onClick={handleTheme}
      className={`cursor-pointer p-1 w-30 font-bold rounded-md font-serif
        ${theme
          ? 'bg-black via-red-900 to-black text-white'
          : 'bg-gradient-to-r from-red-200 via-red-300 to-white text-black'
        }`}
    >
      {theme ? 'Dark 🌙' : 'Light 🌞'}
    </button>
  );
};

export default Theme;
