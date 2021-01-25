// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React from 'react';
import '@gooddata/react-components/styles/css/main.css';

import { ColumnChart, Model } from '@gooddata/react-components';

const grossProfitMeasure = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877';
const dateAttributeInMonths = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142';
const dateAttribute = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180';

const App: React.FC = () => {
  const getMonthFilter = () => Model.absoluteDateFilter(dateAttribute, '2016-01-01', '2016-01-31');

  const getMeasures = () => [
    Model.measure(grossProfitMeasure).localIdentifier('m1').alias('$ Gross Profit'),
  ];

  const getViewBy = () => Model.attribute(dateAttributeInMonths).localIdentifier('a1');

  const renderDropdown = () => (
    <select defaultValue="1">
      <option value="1">January</option>
      <option value="2">February</option>
      <option value="3">March</option>
      <option value="4">April</option>
      <option value="5">May</option>
      <option value="6">June</option>
      <option value="7">July</option>
      <option value="8">August</option>
      <option value="9">September</option>
      <option value="10">October</option>
      <option value="11">November</option>
      <option value="12">December</option>
    </select>
  );

  const projectId = 'xms7ga4tf3g3nzucd8380o2bev8oeknp';
  const filters = [getMonthFilter()];
  const measures = getMeasures();
  const viewBy = getViewBy();

  return (
    <div className="App">
      <h1>
        $ Gross Profit in month
        {renderDropdown()} 2016
      </h1>
      <div>
        <ColumnChart measures={measures} filters={filters} projectId={projectId} />
      </div>
      <h1>$ Gross Profit - All months</h1>
      <div>
        <ColumnChart measures={measures} viewBy={viewBy} projectId={projectId} />
      </div>
    </div>
  );
};

export default App;
