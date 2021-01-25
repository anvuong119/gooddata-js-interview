import React, { ChangeEvent, FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { updateActiveMonth } from '../grossProfitSlice';

interface MonthSelectProps {
  listMonth: string[];
}

const MonthSelect: FunctionComponent<MonthSelectProps> = ({ listMonth }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const grossProfit = useSelector((state: any) => state.grossProfit);
  const { activeMonth } = grossProfit;

  const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const month = e.target.value;
    const action = updateActiveMonth(month);
    dispatch(action);
  };

  const renderMonthSelect = (
    <select defaultValue={activeMonth} onChange={handleMonthChange}>
      {listMonth.map((monthItem, idx) => (
        <option key={idx} value={idx + 1}>
          {t(monthItem)}
        </option>
      ))}
    </select>
  );

  return <>{renderMonthSelect}</>;
};

export default MonthSelect;
