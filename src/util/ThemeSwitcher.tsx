'use client';

import React, { useState, useEffect } from 'react';


const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<
    'default' | 'dark' | 'white' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple'
  >('default');

  // 테마 변경 함수
  const toggleTheme = (
    newTheme:
      | 'default'
      | 'dark'
      | 'white'
      | 'red'
      | 'orange'
      | 'yellow'
      | 'green'
      | 'blue'
      | 'navy'
      | 'purple',
  ) => {
    setTheme(newTheme);
    document.documentElement.className = ''; // 기존 테마 제거
    if (newTheme !== 'default') {
      document.documentElement.classList.add(`theme-${newTheme}`);
    }
    localStorage.setItem('theme', newTheme); // 테마 상태를 로컬에 저장
  };

  // 저장된 테마 불러오기
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as
      | 'default'
      | 'dark'
      | 'white'
      | 'red'
      | 'orange'
      | 'yellow'
      | 'green'
      | 'blue'
      | 'navy'
      | 'purple';
    if (savedTheme) {
      toggleTheme(savedTheme);
    }
  }, []);

  return (
    <div >
      <button onClick={() => toggleTheme('default')}>Default</button>
      <button onClick={() => toggleTheme('dark')}>Dark</button>
      <button onClick={() => toggleTheme('white')}>White</button>
      <button onClick={() => toggleTheme('red')}>Red</button>
      <button onClick={() => toggleTheme('orange')}>Orange</button>
      <button onClick={() => toggleTheme('yellow')}>Yellow</button>
      <button onClick={() => toggleTheme('green')}>Green</button>
      <button onClick={() => toggleTheme('blue')}>Blue</button>
      <button onClick={() => toggleTheme('navy')}>Navy</button>
      <button onClick={() => toggleTheme('purple')}>Purple</button>
    </div>
  );
};

export default ThemeSwitcher;
