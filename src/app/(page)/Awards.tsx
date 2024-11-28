'use client';
import Image from 'next/image';
import React,{useState, useEffect} from 'react';
import styles from './Awards.module.css';  // CSS Modules import
import { useTranslation } from 'react-i18next';
import Devider from '../(component)/Devider';
import blogProject from '../images/blogProject.png';

import github from '../images/github.png';
import notion from '../images/notion.png';
import 'animate.css';
import '../../../i18n'

//skill marks
import htmlJSCssImg from  '../images/html_js_css.png';
import typescriptImg from  '../images/typescript.png';
import reactNativeImg from "../images/reactNative.png";

import HUFSLogo from '../images/HUFSLogo.png';
import award from "../images/HUFSTHON.png";
import majubom1 from "../images/majubom_1.jpeg";

const Awards: React.FC = () => {
  const { t } = useTranslation('common');  // 공통 번역 파일 사용
  const blogPj = 'blogProject';
  const helloGachon ='printf(”helloGachon!”)';
  const web = t('web');  // 웹 부분의 번역 추가
  const game = t('game');    // 게임 부분의 번역 추가

  const [project, setProject] = useState(blogPj);
  const [kind, setKind] = useState(web);
  const [selectedProject, setSelectedProject] = useState(blogPj); // 클릭된 프로젝트 상태 관리
  const [animationClass, setAnimationClass] = useState('animate__fadeIn');
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

  useEffect(() => {
    setKind(web);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      setKind(web);
      setProject(blogPj);
      setSelectedProject(blogPj);
    }
  }, [isInitialized, web, blogPj]);
  
  if (!isInitialized) return null;
  const changeProject = (project: string) => {
    setAnimationClass(''); // 애니메이션 리셋
    setSelectedProject(project); // 클릭 시 프로젝트 상태 업데이트
    setTimeout(() => {
      setProject(project); // 프로젝트 변경
      setAnimationClass('animate__fadeIn'); // 애니메이션 다시 추가
    }, 0);
  };
  
  const changeKind = (whatKind: string) => {
    setKind(whatKind);
    
    if(whatKind === web) {
      setProject(blogPj); 
      setSelectedProject(blogPj); // 클릭 시 프로젝트 상태 업데이트
    }

  };



  // 새로운 창에서 GitHub 페이지 열기
  const goToGithub = (whatKind : string) => {

    switch(whatKind){
      case blogPj : 
        window.open(`https://github.com/Developer-Jomusa/HUFSTHON2024_Client`, '_blank');
        break;

      default:
        window.open(`https://github.com/heeyeon9578/`, '_blank');
        break;
    }
    
  };
  // 새로운 창에서 Notion 페이지 열기
  const goToNotion = (whatKind : string) => {
    
    switch(whatKind){
      case blogPj : 
        window.open(`https://heeyeon9578.notion.site/148accb87c2b805ebb81fc81a72fd317?pvs=4`, '_blank');
        break;

      default:
        window.open(`http://heeyeon9578.notion.site/`, '_blank');
        break;
    }
  };

  return (
    <div className={styles.profilePage}>

        <div>
           <div className={styles.defaultFont}>{t('awards')}</div>
           <Devider 
           width={1650} 
           height={5} />
        </div>

       
       {kind === web && <div className={styles.projectAndDetail}>

          <div className={styles.projects}>
            <div className={`${styles.project} ${selectedProject === blogPj ? styles.active : ''}`} onClick={()=>changeProject(blogPj)}>
              <Image src={HUFSLogo} alt='blog-project' className={styles.projectImg}></Image>
            </div>
       
          </div>

          <div className={`${styles.detail} animate__animated ${animationClass}`}>

            {project === blogPj &&(
                <div className={styles.detailAll}>

                  <div className={styles.imgAndName}>
                    <div className={styles.skills}>
                      <Image src={reactNativeImg} className={styles.github} alt="react"></Image>
                      <Image src={typescriptImg} className={styles.github} alt="react"></Image>
                      <Image src={htmlJSCssImg} className={styles.github} alt="react"></Image>
                    </div>
                   
                    <Image src={majubom1} className={styles.projectDetail} alt='blog'></Image>
                    <span className={styles.blog} >{t('majubom')}</span>
                    <span className={styles.blogDetail}>{t('majubomDetail')}</span>
                  </div>

                  <div className={styles.gitAndNotion}>
                    <div className={styles.circle} onClick={()=>goToGithub(project)}>
                      <Image src={github} className={styles.github} alt='github'></Image>
                    </div>
                    <div className={styles.circle} onClick={()=>goToNotion(project)}>
                      <Image src={notion} className={styles.github} alt='notion'></Image>
                    </div>
                  </div>
                  
                </div>


            )}

           
          </div>

          <div className={styles.paperAward}>
            <Image src={award} className={styles.projectDetail2} alt='blog'></Image>
          </div>
        </div>}
        
   
    </div>  
  );
};

export default Awards;
