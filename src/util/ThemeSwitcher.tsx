'use client';

import React, { useState, useEffect } from 'react';
import styles from "./ThemeSwitcher.module.css";
import classNames from 'classnames';

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<
    'white' | 'pink' | 'dark' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple'
  >('white'); // 디폴트를 화이트로 설정

  // 테마 변경 함수
  const toggleTheme = (
    newTheme:
      | 'white'
      | 'pink'
      | 'dark'
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
    if (newTheme !== 'white') { // 화이트를 디폴트로 설정
      document.documentElement.classList.add(`theme-${newTheme}`);
    }
    localStorage.setItem('theme', newTheme); // 테마 상태를 로컬에 저장
  };

  // 저장된 테마 불러오기
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as
      | 'white'
      | 'pink'
      | 'dark'
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
    <div className={styles.colorPicker}>
      <button
        className={classNames(styles.white, styles.size)}
        onClick={() => toggleTheme('white')}
        title="White"
      ></button>
      <button
        className={classNames(styles.pink, styles.size)}
        onClick={() => toggleTheme('pink')}
        title="Pink"
      ></button>
      <button
        className={classNames(styles.dark, styles.size)}
        onClick={() => toggleTheme('dark')}
        title="Dark"
      ></button>
      <button
        className={classNames(styles.red, styles.size)}
        onClick={() => toggleTheme('red')}
        title="Red"
      ></button>
      <button
        className={classNames(styles.orange, styles.size)}
        onClick={() => toggleTheme('orange')}
        title="Orange"
      ></button>
      <button
        className={classNames(styles.yellow, styles.size)}
        onClick={() => toggleTheme('yellow')}
        title="Yellow"
      ></button>
      <button
        className={classNames(styles.green, styles.size)}
        onClick={() => toggleTheme('green')}
        title="Green"
      ></button>
      <button
        className={classNames(styles.blue, styles.size)}
        onClick={() => toggleTheme('blue')}
        title="Blue"
      ></button>
      <button
        className={classNames(styles.navy, styles.size)}
        onClick={() => toggleTheme('navy')}
        title="Navy"
      ></button>
      <button
        className={classNames(styles.purple, styles.size)}
        onClick={() => toggleTheme('purple')}
        title="Purple"
      ></button>
    </div>
  );
};

export default ThemeSwitcher;
