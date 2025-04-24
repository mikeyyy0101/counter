import React from 'react';
import Theme from './Theme';

const Header = ({ theme, setTheme }) => {
  return (
    <header>
    
      <nav className={`p-4 flex justify-between text-xl font-bold${theme ? 'header-light bg-rose-200' : 'header-dark bg-red-900/30'}`}>
        <div className='w-12 '>

  
         <img className='rounded-full' src="./brand.png" alt="logo" />
     

        </div>
        <div>
          <Theme theme={theme} setTheme={setTheme} /> {/* Pass theme and setTheme */}
        </div>
      </nav>

    </header>
  );
};

export default Header;
