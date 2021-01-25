import { LoadingComponent } from '@gooddata/sdk-ui';
import React from 'react';
import styles from './Loading.module.scss';

export interface LoadingProps {
  spinning?: boolean;
  fullScreen?: React.ReactNode;
}

export const Loading: React.FC<LoadingProps> = ({ spinning = false, fullScreen }) => (
  <div
    className={`${styles.loading} ${!spinning ? styles.hidden : null} ${
      fullScreen ? styles.fullScreen : null
    }`}
  >
    <LoadingComponent color="tomato" height={300} imageHeight={16} speed={2} />
  </div>
);
