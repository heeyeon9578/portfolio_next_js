'use client';
import Image from 'next/image';
import '../../../i18n'
import React ,{useState,useEffect}from 'react';
import styles from './Menus.module.css';  // CSS Modules import
import { useTranslation } from 'react-i18next';
import 'animate.css';

interface MainPageProps {
  scrollTo: (menu:string) => void;  // 프로필로 스크롤하기 위한 함수 prop
}

const Menus: React.FC<MainPageProps> = ({ scrollTo }) => {

  const { t,i18n } = useTranslation('common');
  const [isInitialized, setIsInitialized] = useState(false);
  useEffect(() => {
    if (i18n.isInitialized) {
      setIsInitialized(true);
    } else {
      const handleInitialized = () => setIsInitialized(true);
      i18n.on('initialized', handleInitialized);
      return () => {
        i18n.off('initialized', handleInitialized);
      };
    }
  }, [i18n]);
  if (!isInitialized) return null;

  return (
    <div className={styles.btns}>
        <button className={styles.primaryBtn} onClick={()=>scrollTo('profile')}>{t('profile')}</button>
        <button className={styles.primaryBtn} onClick={()=>scrollTo('projects')}>{t('projects')}</button>
        <button className={styles.primaryBtn} onClick={()=>scrollTo('certification')}>{t('certifications')}</button>
        <button className={styles.primaryBtn} onClick={()=>scrollTo('career')} >{t('experience')}</button>
        <button className={styles.primaryBtn} onClick={()=>scrollTo('awards')} >{t('awards')}</button>
        <button className={styles.primaryBtn} onClick={()=>scrollTo('email')} >{t('email')}</button>
        <button className={styles.primaryBtn} onClick={()=>scrollTo('guestbook')}>{t('guestbook')}</button>
    </div>
  );
};

export default Menus;
