/* eslint-disable no-unused-vars */
import { ColumnChart } from '@gooddata/react-components';
import { VisualizationObject } from '@gooddata/typings';
import React from 'react';
import { useSelector } from 'react-redux';
import { getFilter } from '_utils/helpers';
import { Page } from '_components/common';
import styles from './GrossProfitMonth.module.scss';
import MonthSelect from './MonthSelect';
import YearSelect from './YearSelect';
import { MONTHS, YEARS } from '_constants';

export interface GrossProfitMonthProps {
  measures: VisualizationObject.BucketItem[];
  projectId: string;
}

const GrossProfitMonth: React.FC<GrossProfitMonthProps> = ({ measures, projectId }) => {
  const grossProfit = useSelector((state: any) => state.grossProfit);
  const { activeMonth, activeYear } = grossProfit;
  const filter = getFilter(activeMonth, activeYear);
  return (
    <>
      <Page>
        <div className={styles.title}>
          $ Gross Profit in month <MonthSelect listMonth={MONTHS} /> -{' '}
          <YearSelect listYear={YEARS} />
        </div>
        <div className={styles.columnChart}>
          <ColumnChart measures={measures} filters={[filter]} projectId={projectId} />
        </div>
      </Page>
    </>
  );
};

export default GrossProfitMonth;
