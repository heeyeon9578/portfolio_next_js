'use client';
import React,{useRef} from 'react';
import styles from './Dashboard.module.css';  // CSS Modules import
import MainPage from '../app/(page)/MainPage';
import Sticky from '../app/(page)/Sticky';
import Profile from '../app/(page)/Profile'
import Projects from '../app/(page)/Projects';
import Skill from '../app/(page)/Skill';

const Dashboard: React.FC = () => {

 // Profile 컴포넌트에 대한 ref 생성
 const profileRef = useRef<HTMLDivElement>(null);
 const projectRef = useRef<HTMLDivElement>(null);
 const skillRef = useRef<HTMLDivElement>(null);

 // Profile로 스크롤하는 함수
 const scrollTo = (menu: string) => {
   if ( menu ==='profile' &&profileRef.current) {
     profileRef.current.scrollIntoView({ behavior: 'smooth' });
   }

   if ( menu ==='projects' &&projectRef.current) {
    projectRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  if ( menu ==='skill' && skillRef.current) {
    skillRef.current.scrollIntoView({ behavior: 'smooth' });
  }
 };
  return (
    <div className={styles.app}>
      <Sticky></Sticky>
      <MainPage scrollTo={scrollTo}></MainPage> 

      <div ref={profileRef}>
        <Profile />
      </div>

      <div ref={projectRef}>
        <Projects />
      </div>

      <div ref={skillRef}>
        <Skill />
      </div>

    </div>
  );
};

export default Dashboard;
