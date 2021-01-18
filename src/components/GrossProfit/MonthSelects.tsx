import { ChangeEvent, FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MONTHS, YEARS } from '../../constants';
import { updateActiveMonth, updateActiveYear } from '../../pages/GrossProfit/grossProfitSlice';

const MonthSelects: FunctionComponent = () => {
  const dispatch = useDispatch();
  const grossProfit = useSelector((state: any) => state.grossProfit);
  const { activeMonth, activeYear } = grossProfit;

  const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const month = e.target.value;
    const action = updateActiveMonth(month);
    dispatch(action);
  };

  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const year = e.target.value;
    const action = updateActiveYear(year);
    dispatch(action);
  };

  const renderMonthSelect = () => (
    <select defaultValue={activeMonth} onChange={handleMonthChange}>
      {MONTHS.map((monthItem, idx) => (
        <option key={idx} value={idx + 1}>
          {monthItem}
        </option>
      ))}
    </select>
  );

  const renderYearSelect = () => (
    <select defaultValue={activeYear} onChange={handleYearChange}>
      {YEARS.map((yearItem, idx) => (
        <option key={idx} value={yearItem}>{yearItem}</option>
      ))}
    </select>
  );

  return (
    <>
      {renderMonthSelect()} {renderYearSelect()}
    </>
  );
};

export default MonthSelects;
