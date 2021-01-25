import React from 'react';
import styles from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <div className={styles.error}>
      <h1>404 Not Found</h1>
    </div>
  );
};
