// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Loading } from '_components/common';
import store from '_redux/store';
import App from './App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Loading spinning />}>
      <App />
    </Suspense>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
