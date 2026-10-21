'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import s from './Portfolio.module.css';
import character from './images/profileImg.png';
import portrait from './images/heeyeon.jpg';
import blog from './images/dashboardPage.png';
import stellar from './images/stellarLinkMain.png';
import geugol from './images/geugolImg.png';
import gachon from './images/helloGachon.png';
import portfolio from './images/portFolioImg.png';
import cert1 from './images/cert1.png';
import cert2 from './images/cert2.png';
import cert3 from './images/cert3.png';
import award from './images/majubom_1.jpeg';
import Email from './(page)/Email';
import GuestBook from './(page)/GuestBook';
const projects = [
  {name:'MK-Blog', desc:'blogDetail', image:blog, tags:['React','TypeScript'], category:'web', repo:'https://github.com/MiffyAndKitty/BlogProject_Front'},
  {name:'Stellar Link', desc:'stellarLinkDetail', image:stellar, tags:['React','Socket.IO'], category:'web', repo:'https://github.com/heeyeon9578/Stellar-Link'},
  {name:'geugol', desc:'geugolDetail', image:geugol, tags:['React','TypeScript'], category:'web', repo:'https://github.com/BSBSCompany/Geugol_Front'},
  {name:'Hello Gachon!', desc:'helloGachonDetail', image:gachon, tags:['Unity','C#'], category:'game', repo:'https://github.com/heeyeon9578/HelloGachon'},
  {name:'portFolio', desc:'portFolioDetail', image:portfolio, tags:['Next.js','MongoDB'], category:'web', repo:'https://github.com/heeyeon9578/portfolio_next_js'},
];
export default function Portfolio(){
 const {t,i18n}=useTranslation('common');
 const [english,setEnglish]=useState(false);
 const [dark,setDark]=useState(false);
 const [filter,setFilter]=useState('all');
 const [contact,setContact]=useState<'email'|'guestbook'|null>(null);
 const [certificate,setCertificate]=useState<number|null>(null);
 useEffect(()=>{document.documentElement.lang=english?'en':'ko';i18n.changeLanguage(english?'en':'ko');},[english,i18n]);
 const text=(ko:string,en:string)=>english?en:ko;
 const translated=(key:string)=>i18n.isInitialized?t(key):'';
 return <div className={s.site} data-theme={dark?'dark':'light'}>
 <a href="#main" className={s.skip}>Skip to content</a>
 <header className={s.header}><a className={s.logo} href="#home">heeyeon<span> ✳</span></a>
 <nav aria-label="Main navigation"><a href="#about">About</a><a href="#work">Work</a><a href="#journey">Journey</a><a href="#contact">Contact ↗</a></nav>
 <div className={s.tools}><button onClick={()=>setEnglish(!english)} aria-label="Switch language">{english?'KO':'EN'}</button><button onClick={()=>setDark(!dark)} aria-label="Toggle dark mode">{dark?'☀':'☾'}</button></div></header>
 <main id="main">
 <section id="home" className={s.hero}>
 <div className={s.heroCopy}><p className={s.eyebrow}><span/> FRONTEND DEVELOPER · CHOI HEEYEON</p>
 <h1>{text('작은 디테일로,','Little details.')}<br/><em>{text('더 좋은 경험을.','Better experiences.')}</em></h1>
 <p className={s.intro}>{text('안녕하세요, 프론트엔드 개발자 최희연입니다.','Hi, I’m Heeyeon, a frontend developer.')}<br/>{text('아이디어를 화면으로 옮기고, 사용하기 좋은 경험을 만듭니다.','I turn ideas into thoughtful, approachable digital experiences.')}</p>
 <div className={s.actions}><a className={s.primary} href="#work">{text('만든 것들 둘러보기','Explore my work')} <span>↘</span></a><a className={s.secondary} href="/최희연_이력서.pdf" download>{text('이력서 다운로드','Download résumé')} ↓</a></div>
 <div className={s.heroNotes}><span>React & TypeScript</span><span>Thoughtful interactions</span><span>Always curious</span></div></div>
 <div className={s.heroArt}><span className={s.star}>✳</span><div className={s.orbit}/><div className={s.character}><Image src={character} alt={text('노트북으로 코딩하는 희연의 토끼 캐릭터','Heeyeon’s bunny coding on a pink laptop')} priority sizes="(max-width: 760px) 280px, 400px"/></div><span className={s.note}>a little code,<br/>a little joy.</span><span className={s.artLabel}>DESIGNED WITH CARE, BUILT WITH CURIOSITY</span></div>
 </section>
 <div className={s.ribbon}><span>CODE WITH CURIOSITY</span><span>✳</span><span>BUILD WITH CARE</span><span>✳</span><span>MAKE IT FEEL RIGHT</span><span>✳</span></div>
 <section id="about" className={s.section}><div className={s.sectionHead}><p className={s.eyebrow}>01 / A LITTLE ABOUT ME</p><h2>{text('생각하고, 만들고, 다듬는 사람.','Curious mind. Thoughtful maker.')}</h2></div>
 <div className={s.about}><div className={s.portrait}><Image src={portrait} alt="최희연" sizes="(max-width:760px) 80vw, 300px"/><span>CHOI HEEYEON / 최희연</span></div><div className={s.aboutCopy}><h3>{text('만드는 즐거움이, 계속 배우는 이유.','The joy of making keeps me learning.')}</h3>{[1,2,3,4,5].map(n=><p key={n}>{translated(`profile_sentence_${n}`)}</p>)}<div className={s.skills}>{['TypeScript','JavaScript','React','Next.js','Vue.js','HTML / CSS','Git'].map(x=><span key={x}>{x}</span>)}</div></div></div></section>
 <section id="work" className={`${s.section} ${s.work}`}><div className={s.workHead}><div className={s.sectionHead}><p className={s.eyebrow}>02 / SELECTED WORK</p><h2>{text('아이디어가 화면이 되기까지.','From an idea to something real.')}</h2></div><div className={s.filters} role="group" aria-label="Project filters">{['all','web','game'].map(x=><button key={x} aria-pressed={filter===x} onClick={()=>setFilter(x)}>{x==='all'?'All work':x==='web'?'Web':'Game'}</button>)}</div></div>
 <div className={s.grid}>{projects.filter(p=>filter==='all'||filter===p.category).map((p,index)=><article className={s.project} key={p.name}><a className={s.projectVisual} href={p.repo} target="_blank" rel="noreferrer"><Image src={p.image} alt={`${p.name} ${text('프로젝트 실행 화면','project screenshot')}`} sizes="(max-width:760px) 90vw, 45vw"/><span className={s.projectArrow}>↗</span></a><div className={s.projectMeta}><span>0{index+1} / {p.category.toUpperCase()}</span><div>{p.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div><h3><a href={p.repo} target="_blank" rel="noreferrer">{['geugol','portFolio'].includes(p.name)?translated(p.name):p.name}</a></h3><p>{translated(p.desc)}</p></article>)}</div></section>
 <section id="journey" className={s.section}><div className={s.sectionHead}><p className={s.eyebrow}>03 / EXPERIENCE & LEARNING</p><h2>{text('차곡차곡 쌓아온 경험.','A journey, one step at a time.')}</h2></div>
 <div className={s.timeline}><article><span>2023.03 — 2024.07</span><div><h3>{translated('company2')}</h3><p>{translated('GyoJung')}</p><p>{translated('GyoJungDetail')}</p><details><summary>{text('다른 업무 살펴보기','More work')}</summary><h4>{translated('CMS')}</h4><p>{translated('CMSDetail')}</p><h4>T live GCS</h4><p>{translated('TliveGCS')}</p></details></div></article><article><span>2021.07 — 2021.12</span><div><h3>{translated('company1')}</h3><p>Mask R-CNN · Python</p><p>{translated('maskRcnn')}</p></div></article></div>
 <div className={s.credentials}><div><h3>{text('자격증','Certifications')} <span>↗</span></h3><div className={s.certs}>{[cert1,cert2,cert3].map((img,i)=><button key={i} onClick={()=>setCertificate(i)} aria-label={`${text('자격증 크게 보기','View certificate')} ${i+1}`}><Image src={img} alt={`${text('자격증','Certificate')} ${i+1}`} sizes="150px"/></button>)}</div></div><div className={s.award}><Image src={award} alt="마주봄 프로젝트" sizes="120px"/><div><p className={s.eyebrow}>HUFSTHON / PROJECT</p><h3>{translated('majubom')}</h3><p>{translated('majubomDetail')}</p><a href="https://github.com/Developer-Jomusa/HUFSTHON2024_Client" target="_blank" rel="noreferrer">{text('프로젝트 보기','View project')} ↗</a></div></div></div></section>
 <section id="contact" className={s.contact}><p className={s.eyebrow}>04 / LET’S MAKE SOMETHING GOOD</p><h2>{text('좋은 이야기는,','Good things start')}<br/><em>{text('작은 인사에서.','with a hello.')}</em></h2><a className={s.emailLink} href="mailto:heeyeon9578@naver.com">heeyeon9578@naver.com ↗</a><div className={s.contactLinks}><a href="https://github.com/heeyeon9578" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://choi-hee-yeon.tistory.com/" target="_blank" rel="noreferrer">Blog ↗</a><a href="https://heeyeon9578.notion.site/Heeyoun-s-IT-6ce6046d06a649e5bad5b7b76ce35ca2" target="_blank" rel="noreferrer">Notion ↗</a><button aria-expanded={contact==='email'} onClick={()=>setContact(contact==='email'?null:'email')}>{text('메일 보내기','Send a message')} +</button><button aria-expanded={contact==='guestbook'} onClick={()=>setContact(contact==='guestbook'?null:'guestbook')}>{text('방명록','Guestbook')} +</button></div>{contact&&<div className={s.legacy}>{contact==='email'?<Email/>:<GuestBook/>}</div>}</section>
 </main><footer className={s.footer}><a className={s.logo} href="#home">heeyeon ✳</a><span>Made with curiosity & a little joy.</span><a href="#home">Back to top ↑</a></footer>
 {certificate!==null&&<div className={s.modal} role="dialog" aria-modal="true" aria-label={text('자격증 미리보기','Certificate preview')} onClick={()=>setCertificate(null)}><button autoFocus onClick={()=>setCertificate(null)} onKeyDown={e=>{if(e.key==='Escape')setCertificate(null)}} aria-label="Close">×</button><Image src={[cert1,cert2,cert3][certificate]} alt={text('자격증 원본','Full certificate')} sizes="90vw"/></div>}
 </div>
}
