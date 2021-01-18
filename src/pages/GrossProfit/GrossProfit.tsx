// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.
import '@gooddata/react-components/styles/css/main.css';
import React, { FunctionComponent } from 'react';
import GrossProfitAllMonths from '../../components/GrossProfit/GrossProfitAllMonths';
import GrossProfitMonth from '../../components/GrossProfit/GrossProfitMonth';
import { PROJECT_ID } from '../../constants';
import { MEASURES, VIEW_BY } from '../../utils/helpers';

const GrossProfit: FunctionComponent = () => (
  <div>
    <GrossProfitMonth measures={MEASURES} projectId={PROJECT_ID} />
    <GrossProfitAllMonths measures={MEASURES} viewBy={VIEW_BY} projectId={PROJECT_ID} />
  </div>
);

export default GrossProfit;
