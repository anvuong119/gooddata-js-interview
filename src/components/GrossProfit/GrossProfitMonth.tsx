/* eslint-disable no-unused-vars */
import { ColumnChart } from '@gooddata/react-components';
import { VisualizationObject } from '@gooddata/typings';
import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { getFilter } from '../../utils/helpers';
import { Page } from '../common';
import styles from './GrossProfitMonth.module.scss';
import Selects from './MonthSelects';

export interface GrossProfitMonthProps {
  measures: VisualizationObject.BucketItem[];
  projectId: string;
}

const GrossProfitMonth: FunctionComponent<GrossProfitMonthProps> = ({ measures, projectId }) => {
  const grossProfit = useSelector((state: any) => state.grossProfit);
  const { activeMonth, activeYear } = grossProfit;
  const filter = getFilter(activeMonth, activeYear);
  return (
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
};

export default GrossProfitMonth;
