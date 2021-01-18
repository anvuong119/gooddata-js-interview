/* eslint-disable no-unused-vars */
import { ColumnChart } from '@gooddata/react-components';
import { VisualizationObject } from '@gooddata/typings';
import React, { FunctionComponent } from 'react';
import { Page } from '../../../components/common';
import styles from './GrossProfitMonth.module.scss';
import Selects from './Selects';

export interface GrossProfitMonthProps {
  measures: VisualizationObject.BucketItem[];
  // filter: VisualizationObject.VisualizationObjectFilter;
  projectId: string;
}

const GrossProfitMonth: FunctionComponent<GrossProfitMonthProps> = ({ measures, projectId }) => (
  <>
    <Page inner>
      <div className={styles.title}>
        $ Gross Profit in month <Selects />
      </div>
      <div className={styles.columnChart}>
        <ColumnChart measures={measures} filters={[filter]} projectId={projectId} />
      </div>
    </Page>
  </>
);

export default GrossProfitMonth;
