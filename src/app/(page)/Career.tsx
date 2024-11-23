'use client';
import Image from 'next/image';
import React,{useState,useEffect} from 'react';
import styles from './Career.module.css';  // CSS Modules import
import { useTranslation } from 'react-i18next';
import Devider from '../(component)/Devider';
import 'animate.css';
import '../../../i18n'
import Rectangle from '../(component)/Rectangle';
import GyoJungImg from '../images/GyoJungImg.png';
import maskRcnnImg from '../images/maskRcnn.png';
import github from '../images/github.png';
import notion from '../images/notion.png';
import 'animate.css';
import '../../../i18n'

//skill marks
import reactImg from  '../images/react.png';
import vueImg from  '../images/vue.png';
import htmlJSCssImg from  '../images/html_js_css.png';
import typescriptImg from  '../images/typescript.png';
import unityImg from  '../images/unity.png';
import nextJSImg from '../images/nextJS.png';
import mongDBImg from '../images/mongoDB.png';
import cSharpImg from '../images/csharp.png';
import AiImg from  '../images/AI.png';
import pythonImg from  '../images/python.png';

const Career: React.FC = () => {
    const maskRcnn = "maskRcnn";
    const GyoJung  = "GyoJung";
    const CMS  = "CMS";
    const TLiveGCS  = "TLiveGCS";

    const { t ,i18n} = useTranslation('common');  // 공통 번역 파일 사용
    const [isInitialized, setIsInitialized] = useState(false);
    const [animationClass, setAnimationClass] = useState('animate__fadeIn');
    const [project, setProject] = useState(maskRcnn); //비투엔
    const [project2, setProject2] = useState(GyoJung); //제노소프트
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
// 프로젝트 배열
const projects = [
  GyoJung, CMS, TLiveGCS
];

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

    // 새로운 창에서 GitHub 페이지 열기
    const goToGithub = (whatKind : string) => {

        switch(whatKind){
          case maskRcnn : 
            window.open(`https://github.com/heeyeon9578/Mask-R-CNN`, '_blank');
            break;
          default:
            window.open(`https://github.com/heeyeon9578/`, '_blank');
            break;
        }
        
      };
      // 새로운 창에서 Notion 페이지 열기
      const goToNotion = (whatKind : string) => {
        
        switch(whatKind){
          case GyoJung :
            window.open(`https://heeyeon9578.notion.site/Jena-us-Soft-2023-03-13-2024-07-12-5a6f942af65f4aa3b86fe0a7cadf1753?pvs=4`, '_blank');
            break;
          default:
            window.open(`http://heeyeon9578.notion.site/`, '_blank');
            break;
        }
      };

      const goToSite = (whatKind : string) => {
        
        switch(whatKind){
          case GyoJung :
            window.open(`http://116.124.172.134:9092/login`, '_blank');
            break;
            case TLiveGCS :
              window.open(`https://www.tlivecaster.com/#/product/video_monitoring`, '_blank');
              break;
          default:
            window.open(`http://heeyeon9578.notion.site/`, '_blank');
            break;
        }
      };
  // 현재 표시 중인 프로젝트
  const currentProject = projects[currentProjectIndex];
      
  // 프로젝트 변경 핸들러
  const nextProject = () => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };
 
  const prevProject = () => {
      setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className={styles.profilePage}>

        <div>
           <div className={styles.defaultFont}>{t('career')}</div>
         
           <Devider 
           startColor="#F2BED1" 
           endColor="#8C6E79" 
           width={1650} 
           height={5} />
           
        </div>
        <div className={styles.career}>
            <Rectangle
              startColor="#F2BED1" 
              endColor="#8C6E79"   
              width={3}
              height={884}
              className={styles.year}

            />
            <Rectangle
              startColor="#F2BED1" 
              endColor="#8C6E79"   
              width={30}
              height={340}
              className={styles.smallYear}
            />

            <Rectangle
              startColor="#F2BED1" 
              endColor="#8C6E79"   
              width={30}
              height={340}
              className={styles.smallYear2}
            />
            
            <div>
                <div className={styles.yearText}>{'21.07  '+t('company1')}</div>

                <div className={`${styles.detail} animate__animated ${animationClass}`}>
                    <div className={styles.detailAll}>

                        <div className={styles.imgAndName}>
                          <div className={styles.skills}>
                            <Image src={AiImg} className={styles.github} alt="react"></Image>
                            <Image src={pythonImg} className={styles.github} alt="react"></Image>
                          </div>

                          <Image src={maskRcnnImg} className={styles.projectDetail}  alt='blog'></Image>
                          <span className={styles.blog} >Mask R-CNN</span>
                          <span className={styles.blogDetail}>{t('maskRcnn')}</span>
                        </div>

                        <div className={styles.gitAndNotion}>
                          <div className={styles.circle} onClick={()=>goToGithub(project)}>
                                <Image src={github} className={styles.github} alt='github'></Image>
                          </div>
        
                        </div>

                    </div>
                </div>

                <div className={styles.yearText2}>21.12</div>

                <div className={styles.yearText3}>{'23.03  '+t('company2')}</div>

                <div className={`${styles.detail2} animate__animated ${animationClass}`}>
                   {
                    currentProject === GyoJung &&(
                        <div className={styles.detailAll}>

                        <div className={styles.imgAndName}>
                          <div className={styles.skills}>
                            <Image src={vueImg} className={styles.github} alt="vue"></Image>
                            <Image src={htmlJSCssImg} className={styles.github} alt="htmlJsCss"></Image>
                          </div>

                          <Image src={GyoJungImg} className={styles.projectDetail} onClick={()=>{goToSite(project2)}}  alt='blog'></Image>
                          <span className={styles.blog} >{t('GyoJung')}</span>
                          <span className={styles.blogDetail}>{t('GyoJungDetail')}</span>
                        </div>

                        <div className={styles.gitAndNotion}>
                     
                          <div className={styles.circle} onClick={()=>goToNotion(project2)}>
                                <Image src={notion} className={styles.github} alt='notion'></Image>
                          </div>
                        </div>

                    </div>
                    )
                   }

{
                    currentProject === CMS &&(
                        <div className={styles.detailAll}>

                        <div className={styles.imgAndName}>
                          <div className={styles.skills}>
                            <Image src={vueImg} className={styles.github} alt="vue"></Image>
                            <Image src={htmlJSCssImg} className={styles.github} alt="htmlJsCss"></Image>
                          </div>

                          <span className={styles.blog} >{t('CMS')}</span>
                          <span className={styles.blogDetail2}>{t('CMSDetail')}</span>
                        </div>

                      

                    </div>
                    )
                   }

{
                    currentProject === TLiveGCS &&(
                        <div className={styles.detailAll}>

                        <div className={styles.imgAndName} onClick={()=>{goToSite(project2)}}>
                          <div className={styles.skills}>
                            <Image src={cSharpImg} className={styles.github} alt="cSharpImg"></Image>
                          
                          </div>

                          <span className={styles.blog} >T live GCS</span>
                          <span className={styles.blogDetail2}>{t('TliveGCS')}</span>
                        </div>

                    </div>
                    )
                   }
                  
                </div>
                 {/* 오른쪽 버튼 */}
                 <button className={styles.arrowButton} onClick={nextProject}>
                    &gt;
                  </button>
                <div className={styles.yearText4}>24.07</div>
            </div>
        </div>
       

      
    </div>  
  );
};

export default Career;
