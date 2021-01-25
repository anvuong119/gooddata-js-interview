import React from 'react';
import { ChangeEvent, FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateActiveYear } from '../grossProfitSlice';

interface YearSelectProps {
  listYear: number[];
}

const YearSelects: FunctionComponent<YearSelectProps> = ({ listYear }) => {
  const dispatch = useDispatch();
  const grossProfit = useSelector((state: any) => state.grossProfit);
  const { activeYear } = grossProfit;

  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const year = e.target.value;
    const action = updateActiveYear(year);
    dispatch(action);
  };

  const renderYearSelect = (
    <select defaultValue={activeYear} onChange={handleYearChange}>
      {listYear.map((yearItem, idx) => (
        <option key={idx} value={yearItem}>
          {yearItem}
        </option>
      ))}
    </select>
  );

  return <>{renderYearSelect}</>;
};

export default YearSelects;
