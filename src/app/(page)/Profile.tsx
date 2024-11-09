'use client';
import Image from 'next/image';
import React,{useState,useEffect} from 'react';
import styles from './Profile.module.css';  // CSS Modules import
import { useTranslation } from 'react-i18next';
import devider from '../images/devider.png';
import heeyeon from '../images/heeyeon.jpg'
import 'animate.css';
import '../../../i18n'

const Profile: React.FC = () => {
  
  const { t ,i18n} = useTranslation('common');  // 공통 번역 파일 사용
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
    <div className={styles.profilePage}>

        <div>
           <div className={styles.defaultFont}>{t('profile')}</div>
           <Image src={devider} className={styles.devider} alt='devider' ></Image>
        </div>

        <div className={styles.imgAndParagraph}>

          <div className={styles.profileImgStyle}>
            <div className={styles.myImg}>
                <Image src={heeyeon} alt="Profile" priority></Image>
            </div>
          </div>
            
          <div className={styles.paragraphStyle}>
            <div className={styles.paragraph}>
                <span className={`${styles.sentence} animate__animated animate__fadeIn`}>{t('profile_sentence_1')}</span>
                <span className={`${styles.sentence} animate__animated animate__fadeIn`}>{t('profile_sentence_2')}</span>
                <span className={`${styles.sentence} animate__animated animate__fadeIn`}>{t('profile_sentence_3')}</span>
                <span className={`${styles.sentence} animate__animated animate__fadeIn`}>{t('profile_sentence_4')}</span>
                <span className={`${styles.sentence} animate__animated animate__fadeIn`}>{t('profile_sentence_5')}</span>
            </div>
          </div>
        </div>
        

    </div>  
  );
};

export default Profile;
