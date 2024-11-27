'use client';
import React,{useRef} from 'react';
import styles from './Dashboard.module.css';  // CSS Modules import
import MainPage from '../app/(page)/MainPage';
import Sticky from '../app/(page)/Sticky';
import Profile from '../app/(page)/Profile'
import Projects from '../app/(page)/Projects';
import Certification from '../app/(page)/Certification';
import Career from './(page)/Career';
import Awards from './(page)/Awards';

const Dashboard: React.FC = () => {

 // Profile 컴포넌트에 대한 ref 생성
 const profileRef = useRef<HTMLDivElement>(null);
 const projectRef = useRef<HTMLDivElement>(null);
 const certRef = useRef<HTMLDivElement>(null);
 const mainRef = useRef<HTMLDivElement>(null);
 const careerRef = useRef<HTMLDivElement>(null);
 const awardsRef = useRef<HTMLDivElement>(null);
 // Profile로 스크롤하는 함수
 const scrollTo = (menu: string) => {
   if ( menu ==='profile' &&profileRef.current) {
     profileRef.current.scrollIntoView({ behavior: 'smooth' });
   }

   if ( menu ==='projects' &&projectRef.current) {
    projectRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  if ( menu ==='certification' &&certRef.current) {
    certRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  if ( menu ==='main' && mainRef.current) {
    mainRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  if ( menu ==='career' && careerRef.current) {
    careerRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  if ( menu ==='awards' && awardsRef.current) {
    awardsRef.current.scrollIntoView({ behavior: 'smooth' });
  }
 };
  return (
    <div className={styles.app} ref={mainRef}>
     
      <Sticky scrollTo={scrollTo}></Sticky>
      <div className={styles.main}>
        <MainPage scrollTo={scrollTo}></MainPage> 

        <div ref={profileRef}>
          <Profile />
        </div>

        <div ref={projectRef}>
          <Projects />
        </div>

        <div ref={certRef}>
          <Certification />
        </div>

        <div ref={careerRef}>
          <Career />
        </div>

        <div ref={awardsRef}>
          <Awards />
        </div>

      </div>
     

    </div>
  );
};

export default Dashboard;
