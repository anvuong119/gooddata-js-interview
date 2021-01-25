// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Loading } from '_components/common';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Suspense fallback={<Loading spinning />}>
    <App />
  </Suspense>,
  document.getElementById('root'),
);
registerServiceWorker();
