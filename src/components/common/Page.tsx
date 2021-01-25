import React from 'react';
import { Loading } from './Loading';
import styles from './Page.module.scss';

export interface PageProps {
  children: React.ReactNode;
  loading?: boolean;
  inner?: boolean;
}

export const Page: React.FC<PageProps> = ({ children, loading = false, inner = true }) => (
  <div className={`${loading ? styles.loadingStyle : null} ${inner ? styles.contentInner : null}`}>
    {loading ? <Loading spinning /> : ''}
    {children}
  </div>
);
