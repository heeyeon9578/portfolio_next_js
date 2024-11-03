'use client';
import Image from 'next/image';
import React,{useState, useEffect} from 'react';
import styles from './Skill.module.css';  // CSS Modules import
import { useTranslation } from 'react-i18next';
import devider from '../images/devider.png';
import '../../../i18n'



//skill marks
import reactImg from  '../images/react.png';
import vueImg from  '../images/vue.png';
import htmlJSCssImg from  '../images/html_js_css.png';
import typescriptImg from  '../images/typescript.png';
import unityImg from  '../images/unity.png';

//portfolio 
import geugol from '../images/geugol.png';
import dashBoard from '../images/dashboardPage.png';
import portFolioImg from '../images/portFolioImg.png';
import geuGolImg from '../images/geugolImg.png';
import helloGachonImg from '../images/helloGachon.png';
import helloGachonMarkImg from '../images/helloGachonMark.png';

import github from '../images/github.png';
import notion from '../images/notion.png';
import 'animate.css';

const Skill: React.FC = () => {
  const { t,i18n } = useTranslation('common');  // 공통 번역 파일 사용
  const blogPj = 'blogProject';
  const geugolPj = 'geugol';
  const portFolio = 'portFolio';
  const helloGachon ='printf(”helloGachon!”)';

  const reactSkill = 'react';
  const vueSkill = 'vue';
  const htmlJsCssSkill = 'html_js_css';
  const typescriptSkill = 'typescript';
  const unitySkill = 'unity';


  const [project, setProject] = useState(blogPj);
  const [kind, setKind] = useState(reactSkill);
  const [selectedProject, setSelectedProject] = useState(blogPj); // 클릭된 프로젝트 상태 관리
  const [animationClass, setAnimationClass] = useState('animate__fadeIn');
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
  const changeProject = (project: string) => {
    setAnimationClass(''); // 애니메이션 리셋
    setSelectedProject(project); // 클릭 시 프로젝트 상태 업데이트
    setTimeout(() => {
      setProject(project); // 프로젝트 변경
      setAnimationClass('animate__fadeIn'); // 애니메이션 다시 추가
    }, 0);
  };
  
  const changeKind = (whatKind: string) => {
    setAnimationClass(''); // 애니메이션 리셋
    setTimeout(() => {
      setKind(whatKind);  // kind를 선택된 스킬로 변경
      setAnimationClass('animate__fadeIn'); // 애니메이션 다시 추가
    }, 0);
  };

  const goToBlog = () => {
    window.open('https://mk-blogservice.site/', '_blank');
  };

  const goToGeugol = () => {
    window.open('http://geugol.site/link/9cvefH', '_blank');
  };

  const goToPortFolio = () => {
    window.open('https://heeyeon-portfolio.netlify.app/', '_blank');
  };

  // 새로운 창에서 GitHub 페이지 열기
  const goToGithub = (whatKind : string) => {

    switch(whatKind){
      case blogPj : 
        window.open(`https://github.com/MiffyAndKitty/BlogProject_Front`, '_blank');
        break;
      case geugolPj :
        window.open(`https://github.com/BSBSCompany/Geugol_Front`, '_blank');
        break;
      case portFolio:
        window.open(`https://github.com/heeyeon9578/portFolio`, '_blank');
        break;
      case helloGachon:
        window.open(`https://github.com/heeyeon9578/HelloGachon`, '_blank');
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
        window.open(`https://heeyeon9578.notion.site/MK-Blog-24-03-17-24-09-30-e5d9f108063d42fc82e5a6a7d423a596?pvs=4`, '_blank');
        break;
      case geugolPj :
        window.open(`https://neat-professor-a5a.notion.site/1096b09bbd5d8041bdfffb364775f2fd`, '_blank');
        break;
      case portFolio:
        window.open(`https://heeyeon9578.notion.site/52ff5a864dd7461c883070626b058283?pvs=4`, '_blank');
        break;
      case helloGachon:
        window.open(`https://heeyeon9578.notion.site/printf-helloGachon-e14f9740ae474faf99c12aa9c8e35cdb?pvs=4`, '_blank');
        break;
      default:
        window.open(`http://heeyeon9578.notion.site/`, '_blank');
        break;
    }
  };

  return (
    <div className={styles.profilePage}>

        <div>
           <div className={styles.defaultFont}>{t('skills')}</div>
           <Image src={devider} className={styles.devider} alt='devider'></Image>
        </div>

        <div className={styles.buttons}>
            <button className={`${styles.secondaryBtn} ${kind === reactSkill ? styles.activeSecondBtn : ''}`} onClick={()=>changeKind(reactSkill)}>
                <Image className={styles.icon} src={reactImg} alt='react'></Image>
            </button>
            <button className={`${styles.secondaryBtn} ${kind === vueSkill ? styles.activeSecondBtn : ''}`}  onClick={()=>changeKind(vueSkill)}>
                <Image className={styles.icon} src={vueImg} alt='vue'></Image>
            </button>
            <button className={`${styles.secondaryBtn} ${kind === typescriptSkill ? styles.activeSecondBtn : ''}`}  onClick={()=>changeKind(typescriptSkill)}>
                <Image className={styles.icon} src={typescriptImg} alt='vue'></Image>
            </button> 
            <button className={`${styles.secondaryBtn} ${kind === htmlJsCssSkill ? styles.activeSecondBtn : ''}`}  onClick={()=>changeKind(htmlJsCssSkill)}>
                <Image className={styles.icon} src={htmlJSCssImg} alt='vue'></Image>
            </button> 
            <button className={`${styles.secondaryBtn} ${kind === unitySkill ? styles.activeSecondBtn : ''}`}  onClick={()=>changeKind(unitySkill)}>
                <Image className={styles.icon} src={unityImg} alt='vue'></Image>
            </button> 
            
        </div>
        
       {kind === reactSkill && <div className={styles.projectAndDetail}>

         

            <div className={`${styles.detail} animate__animated ${animationClass}`}>
                <div className={styles.detailAll}>

                    <div className={styles.imgAndName}>
                        <Image src={portFolioImg} className={styles.projectDetail} onClick={goToPortFolio} alt='portFolio'></Image>
                        <span className={styles.blog} onClick={goToPortFolio}>{t('portFolio')}</span>
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
            </div>

            <div className={`${styles.detail} animate__animated ${animationClass}`}>
                <div className={styles.detailAll}>
                    
                    <div className={styles.imgAndName}>
                        <Image src={portFolioImg} className={styles.projectDetail} onClick={goToPortFolio} alt='portFolio'></Image>
                        <span className={styles.blog} onClick={goToPortFolio}>{t('portFolio')}</span>
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
            </div>

            <div className={`${styles.detail} animate__animated ${animationClass}`}>
                <div className={styles.detailAll}>
                    
                    <div className={styles.imgAndName}>
                        <Image src={portFolioImg} className={styles.projectDetail} onClick={goToPortFolio} alt='portFolio'></Image>
                        <span className={styles.blog} onClick={goToPortFolio}>{t('portFolio')}</span> 
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
            </div>

        

        </div>}
        
     
    </div>  
  );
};

export default Skill;
