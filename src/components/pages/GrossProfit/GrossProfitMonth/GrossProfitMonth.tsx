/* eslint-disable no-unused-vars */
import { ColumnChart } from '@gooddata/react-components';
import { VisualizationObject } from '@gooddata/typings';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Page } from '_components/common';
import { MONTHS, YEARS } from '_constants';
import { getFilter } from '_utils/helpers';
import styles from './GrossProfitMonth.module.scss';
import MonthSelect from './MonthSelect';
import YearSelect from './YearSelect';

export interface GrossProfitMonthProps {
  measures: VisualizationObject.BucketItem[];
  projectId: string;
}

const GrossProfitMonth: React.FC<GrossProfitMonthProps> = ({ measures, projectId }) => {
  const { t } = useTranslation();

  const grossProfit = useSelector((state: any) => state.grossProfit);
  const { activeMonth, activeYear } = grossProfit;
  const filter = getFilter(activeMonth, activeYear);
  return (
    <>
      <Page>
        <div className={styles.title}>
          {t('good_data.gross_profit_in_month')} <MonthSelect listMonth={MONTHS} /> -{' '}
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
