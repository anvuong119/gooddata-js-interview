import { ColumnChart } from '@gooddata/react-components';
import { VisualizationObject } from '@gooddata/typings';
import React from 'react';
import { Page } from '_components/common';
import styles from './GrossProfitAllMonth.module.scss';

export interface GrossProfitAllMonthsProps {
  measures: VisualizationObject.BucketItem[];
  viewBy: VisualizationObject.IVisualizationAttribute;
  projectId: string;
}

const GrossProfitAllMonths: React.FC<GrossProfitAllMonthsProps> = ({
  measures,
  viewBy,
  projectId,
}) => {
  return (
    <>
      <Page>
        <div className={styles.title}>$ Gross Profit - All months</div>
        <div className={styles.columnChart}>
          <ColumnChart measures={measures} viewBy={viewBy} projectId={projectId} />
        </div>
      </Page>
    </>
  );
};

export default GrossProfitAllMonths;
