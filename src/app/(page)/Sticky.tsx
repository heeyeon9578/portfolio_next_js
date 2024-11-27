'use client';
import Image from 'next/image';
import React,{useState,useEffect } from 'react';
import styles from './Sticky.module.css';  // CSS Modules import
import colorPicker from '../images/colorPickrer.png';
import github from '../images/github.png';
import tistory from '../images/tistory.png';
import notion from '../images/notion.png';
import download from '../images/download.png';
import goUp from '../images/goUp.png'
import '../../../i18n'
import { useTranslation } from 'react-i18next';
import ThemeSwitcher from '@/util/ThemeSwitcher';
interface StickyPageProps {
  scrollTo: (menu:string) => void;  // 프로필로 스크롤하기 위한 함수 prop
}

const Sticky: React.FC<StickyPageProps> = ({ scrollTo }) => {

  const { i18n } = useTranslation('common');

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
  // 언어 전환 함수
  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'ko' : 'en';
    i18n.changeLanguage(newLanguage);
  };

    // 새로운 창에서 GitHub 페이지 열기
    const goToGithub = () => {
      window.open('https://github.com/heeyeon9578/', '_blank');
    }
  
    // 새로운 창에서 Tistory 페이지 열기
    const goToTistory = () => {
      window.open('https://choi-hee-yeon.tistory.com/', '_blank');
    }
  
    // 새로운 창에서 Notion 페이지 열기
    const goToNotion = () => {
      window.open('http://heeyeon9578.notion.site/', '_blank');
    }
  
  const downloadResume = () =>{
    const link = document.createElement('a');
    link.href = '/최희연_이력서.pdf';  // PDF 파일 경로 (public 폴더에 저장)
    link.download = '최희연_이력서.pdf';  // 다운로드될 파일 이름
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className={styles.sticky}>

        <div className={styles.circle} onClick={toggleLanguage}>
          {i18n.language === 'en' ? '한' : 'En'}
        </div>
        <div className={styles.circle}>
        <ThemeSwitcher />
          <Image src={colorPicker} className={styles.colorPicker} alt='colorPicker'></Image>
        </div>
        <div className={styles.circle} onClick={goToGithub}>
          <Image src={github} className={styles.colorPicker} alt='github'></Image>
        </div>
        <div className={styles.circle} onClick={goToTistory}>
          <Image src={tistory} className={styles.colorPicker} alt='tistory'></Image>
        </div>
        <div className={styles.circle} onClick={goToNotion}>
          <Image src={notion} className={styles.colorPicker} alt='notion'></Image>
        </div>
        <div className={styles.download} onClick={downloadResume}>
          <Image src={download} className={styles.colorPicker} alt='download'></Image>
        </div>
        <div className={styles.download} onClick={()=>scrollTo('main')}>
          <Image src={goUp} className={styles.colorPicker} alt='goUp'></Image>
        </div>
      </div>
  );
};

export default Sticky;
