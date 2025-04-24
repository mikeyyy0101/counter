import React from 'react';

const Screen = ({ count, color, theme }) => {
  return (
    <main>
      <section className='flex justify-center items-center mt-20'>
        <section
          className={`h-32 w-64 rounded-xl shadow-inner text-5xl font-bold font-serif flex items-center justify-center ${color} ${theme ? 'screen-light' : 'screen-dark'}`}
        >
          {count}
        </section>
      </section>
    </main>
  );
};

export default Screen;
