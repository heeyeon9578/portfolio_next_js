'use client';
import Image from 'next/image';
import React,{useState,useEffect} from 'react';
import styles from './Certification.module.css';  // CSS Modules import
import { useTranslation } from 'react-i18next';
import Devider from '../(component)/Devider';
import heeyeon from '../images/heeyeon.jpg'
import 'animate.css';
import '../../../i18n'
import Rectangle from '../(component)/Rectangle';
import Cert1 from '../images/cert1.png';
import Cert2 from '../images/cert2.png';
import Cert3 from '../images/cert3.png';
const Profile: React.FC = () => {
   {/* <Rectangle
          startColor="#F2BED1" 
          endColor="#8C6E79"   
          width={50}
          height={600}
        /> */}
  const { t ,i18n} = useTranslation('common');  // 공통 번역 파일 사용
  const [isInitialized, setIsInitialized] = useState(false);
  const [cards, setCards] = useState([
    { id: 1, image: Cert1 },
    { id: 2, image: Cert2 },
    { id: 3, image: Cert3 },
  ]);
   // 왼쪽으로 이동
   const handleRightClick  = () => {
    setCards((prevCards) => [
      prevCards[prevCards.length - 1], // 마지막 카드를 첫 번째로 이동
      ...prevCards.slice(0, prevCards.length - 1), // 나머지 카드를 한 칸씩 뒤로
    ]);
  };

  // 오른쪽으로 이동
  const handleLeftClick = () => {
    setCards((prevCards) => [
      ...prevCards.slice(1), // 첫 번째 카드를 제거하고
      prevCards[0], // 첫 번째 카드를 마지막으로 이동
    ]);
  };


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
           <div className={styles.defaultFont}>{t('certication')}</div>
         
           <Devider 
           startColor="#F2BED1" 
           endColor="#8C6E79" 
           width={1650} 
           height={5} />
           
        </div>

        <div className={styles.certi}>
         
          
          {/* 왼쪽 버튼 */}
        <button className={styles.arrowButton} onClick={handleLeftClick}>
          &lt;
        </button>

        {/* 카드들 */}
        <div className={styles.cardContainer}>
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`${styles.card} ${
                index === 1 ? styles.centerCard : styles.sideCard
              }`}
            >
              <Image src={card.image} alt={`Card ${card.id}`} layout="fill" objectFit="cover" />
            </div>
          ))}
        </div>

        {/* 오른쪽 버튼 */}
        <button className={styles.arrowButton} onClick={handleRightClick}>
          &gt;
        </button>
        </div>

      
    </div>  
  );
};

export default Profile;
