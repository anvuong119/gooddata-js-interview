// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.
import '@gooddata/react-components/styles/css/main.css';
import { VisualizationObject } from '@gooddata/typings';
import React from 'react';
import { PROJECT_ID } from '_constants';
import { VIEW_BY } from '_utils/helpers';
import GrossProfitAllMonths from './GrossProfitAllMonth/GrossProfitAllMonths';
import GrossProfitMonth from './GrossProfitMonth/GrossProfitMonth';

interface GrossProfitProps {
  projectId: string;
  measures: VisualizationObject.BucketItem[];
}

const GrossProfit: React.FC<GrossProfitProps> = ({ projectId, measures }) => {
  return (
    <div>
      <GrossProfitMonth measures={measures} projectId={PROJECT_ID} />
      <GrossProfitAllMonths measures={measures} viewBy={VIEW_BY} projectId={projectId} />
    </div>
  );
};

export default GrossProfit;
