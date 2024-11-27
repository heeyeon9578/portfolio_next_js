'use client';

import React, { useState, useEffect } from 'react';
import styles from './GuestBook.module.css';
import { useTranslation } from 'react-i18next';
import Devider from '../(component)/Devider';
import '../../../i18n';

const GuestBook: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [code, setCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [entries, setEntries] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const { t, i18n } = useTranslation('common');
  const [isInitialized, setIsInitialized] = useState(false);

  const fetchEntries = async (page: number) => {
    try {
      const response = await fetch(`/api/guestbook?page=${page}&limit=10`);
      if (response.ok) {
        const data = await response.json();
        setEntries(data.entries);
        setTotalPages(data.totalPages);
        setCurrentPage(data.currentPage);
      } else {
        console.error('Failed to fetch entries');
      }
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  };

  const handlePageChange = (page: number) => {
    fetchEntries(page); // 페이지 변경 시 새 데이터 요청
  };

  const sendCode = async () => {
    const response = await fetch('/api/send-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      alert('Verification code sent!');
    } else {
      alert('Failed to send verification code.');
    }
  };

  const verifyCode = async () => {
    const response = await fetch('/api/verify-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, code }),
    });

    if (response.ok) {
      setIsVerified(true);
      alert('Verification successful!');
    } else {
      alert('Invalid code!');
    }
  };

  const submitEntry = async () => {
    const response = await fetch('/api/guestbook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, content }),
    });

    if (response.ok) {
      fetchEntries(1); // 새로 저장 후 첫 페이지로 이동하여 데이터 새로고침
      alert('Entry saved!');
    } else {
      alert('Failed to save entry.');
    }
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

    // 초기 데이터 로드
    fetchEntries(1);
  }, [i18n]);

  if (!isInitialized) return null;

  return (
    <div className={styles.profilePage}>
      <div>
        <div className={styles.defaultFont}>{t('guestbook')}</div>

        <Devider
          startColor="#F2BED1"
          endColor="#8C6E79"
          width={1650}
          height={5}
        />
      </div>

      <input
        type="text"
        className={styles.inputField}
        placeholder={t('name')}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        className={styles.inputField}
        placeholder={t('email')}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className={styles.button} onClick={sendCode}>
        {t('sendCode')}
      </button>
      {isVerified ? (
        <>
          <textarea
            className={styles.textareaField}
            placeholder={t('content')}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button className={styles.button} onClick={submitEntry}>
            Submit
          </button>
        </>
      ) : (
        <div>
          <input
            type="text"
            className={styles.inputField}
            placeholder={t('verificationCode')}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button className={styles.button} onClick={verifyCode}>
            {t('verify')}
          </button>
        </div>
      )}
      <div>
        <h2>{t('list')}</h2>
        <div className={styles.entries}>
          {entries.map((entry, index) => (
            <div key={index} className={styles.entryCard}>
              <h3 className={styles.entryName}>{entry.name}</h3>
              <p className={styles.entryContent}>{entry.content}</p>
              <small className={styles.entryMeta}>Email: {entry.email}</small>
              <br />
              <small className={styles.entryMeta}>
                {new Intl.DateTimeFormat('en-US', {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                }).format(new Date(entry.createdAt))}
              </small>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`${styles.paginationButton} ${
              page === currentPage ? styles.activePage : ''
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GuestBook;
