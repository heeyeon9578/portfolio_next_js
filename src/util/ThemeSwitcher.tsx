'use client';

import React, { useState, useEffect } from 'react';
import styles from "./ThemeSwitcher.module.css";

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
    <div>
        <button className={styles.pink} onClick={() => toggleTheme('default')} title="Default"></button>
        <button className={styles.dark} onClick={() => toggleTheme('dark')} title="Dark"></button>
        <button className={styles.white} onClick={() => toggleTheme('white')} title="White"></button>
        <button className={styles.red} onClick={() => toggleTheme('red')} title="Red"></button>
        <button className={styles.orange} onClick={() => toggleTheme('orange')} title="Orange"></button>
        <button className={styles.yellow} onClick={() => toggleTheme('yellow')} title="Yellow"></button>
        <button className={styles.green} onClick={() => toggleTheme('green')} title="Green"></button>
        <button className={styles.blue} onClick={() => toggleTheme('blue')} title="Blue"></button>
        <button className={styles.navy} onClick={() => toggleTheme('navy')} title="Navy"></button>
        <button className={styles.purple} onClick={() => toggleTheme('purple')} title="Purple"></button>
    </div>

  );
};

export default ThemeSwitcher;
