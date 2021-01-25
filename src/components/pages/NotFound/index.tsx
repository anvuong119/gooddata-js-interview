import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './NotFound.module.scss';

export const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.error}>
      <h1>{t('layout.not_found')}</h1>
    </div>
  );
};
