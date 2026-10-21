'use client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from './public/locales/ko/common.json';
import en from './public/locales/en/common.json';
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: { ko: { common: ko }, en: { common: en } },
    lng: 'ko', fallbackLng: 'ko', supportedLngs: ['ko', 'en'],
    ns: ['common'], defaultNS: 'common',
    interpolation: { escapeValue: false },
    initImmediate: false,
  });
}
export default i18n;
