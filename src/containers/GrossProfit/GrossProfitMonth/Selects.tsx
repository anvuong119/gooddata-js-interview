import { FunctionComponent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { updateActiveMonth, updateActiveYear } from '../../../pages/GrossProfit/grossProfitSlice';
import { MONTHS } from '../../../constants';

const Selects: FunctionComponent = () => {
  const dispatch = useDispatch();

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
    <select defaultValue="1" onChange={handleMonthChange}>
      {MONTHS.map((monthItem, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <option key={index} value={index + 1}>
          {monthItem}
        </option>
      ))}
    </select>
  );

  const renderYearSelect = () => (
    <select defaultValue="2015" onChange={handleYearChange}>
      <option value="2015">2015</option>
      <option value="2016">2016</option>
      <option value="2017">2017</option>
      <option value="2018">2018</option>
      <option value="2019">2019</option>
    </select>
  );

  return (
    <>
      {renderMonthSelect()} {renderYearSelect()}
    </>
  );
};

export default Selects;
