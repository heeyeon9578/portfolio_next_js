'use client';
import React, { useState, useEffect } from 'react';
import styles from './Email.module.css'; // CSS Modules import
import { useTranslation } from 'react-i18next';
import Devider from '../(component)/Devider';
import 'animate.css';
import '../../../i18n';

const Email: React.FC = () => {
  const { t, i18n } = useTranslation('common'); // 공통 번역 파일 사용
  const [isInitialized, setIsInitialized] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // 로딩 상태 추가
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

  // 입력 값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null); // 상태 초기화
    setLoading(true); // 로딩 시작

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Email sent successfully!');
        setFormData({ email: '', subject: '', message: '' }); // 입력값 초기화
      } else {
        const errorData = await response.json();
        setStatus(`Failed to send email: ${errorData.message}`);
      }
    } catch (error) {
      console.error(error);
      setStatus('An unexpected error occurred. Please try again later.');
    }finally {
      setLoading(false); // 로딩 종료
    }
  };

  return (
    <div className={styles.profilePage}>
      <div>
        <div className={styles.defaultFont}>{t('email')}</div>
        <Devider width={1650} height={5} />
      </div>

      <form className={styles.emailForm} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder={t("writeEmail")}
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="text"
          name="subject"
          placeholder={t("writeEmailSubject")}
          value={formData.subject}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <textarea
          name="message"
          placeholder={t("writeEmailContent")}
          value={formData.message}
          onChange={handleChange}
          required
          className={styles.textarea}
        />
        <button type="submit" className={styles.submitButton} disabled={loading}>
          {loading ? t('sending') : t('sendEmail')} {/* 로딩 상태에 따라 버튼 텍스트 변경 */}
        </button>
      </form>
      {loading && <div className={styles.loader}>{t('loading')}</div>} {/* 로딩 메시지 */}
      {status && <div className={styles.statusMessage}>{status}</div>}
    </div>
  );
};

export default Email;
