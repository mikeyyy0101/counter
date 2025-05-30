import React, { useState, useEffect } from 'react';
import Screen from './components/Screen';
import Buttonss from './components/Buttonss';
import Header from './components/Header';

const App = () => {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('count');
    return saved ? parseInt(saved) : 0;
  });

  const [color, setColor] = useState('text-gray-500');

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  const [theme, setTheme] = useState(false); // false = dark, true = light

  useEffect(() => {
    document.body.className=theme?'light-theme': 'dark-theme';
  }, [theme]);

  return (
    <main>
      <Header theme={theme} setTheme={setTheme} /> {/* Pass setTheme to Header */}
      <Screen count={count} color={color} />
      <Buttonss count={count} setCount={setCount} setColor={setColor} />
    </main>
  );
};

export default App;
