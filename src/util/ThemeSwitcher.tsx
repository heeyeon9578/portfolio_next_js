'use client';

import React, { useState, useEffect } from 'react';

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<'default' | 'dark' | 'blue'>('default');

  // 테마 변경 함수
  const toggleTheme = (newTheme: 'default' | 'dark' | 'blue') => {
    setTheme(newTheme);
    document.documentElement.className = ''; // 기존 테마 제거
    if (newTheme !== 'default') {
      document.documentElement.classList.add(`theme-${newTheme}`);
    }
    localStorage.setItem('theme', newTheme); // 테마 상태를 로컬에 저장
  };

  // 저장된 테마 불러오기
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'default' | 'dark' | 'blue';
    if (savedTheme) {
      toggleTheme(savedTheme);
    }
  }, []);

  return (
    <div>
      <button onClick={() => toggleTheme('default')}>Default</button>
      <button onClick={() => toggleTheme('dark')}>Dark</button>
      <button onClick={() => toggleTheme('blue')}>Blue</button>
    </div>
  );
};

export default ThemeSwitcher;
