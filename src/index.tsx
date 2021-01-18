// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Loading } from './components/common';
import './index.scss';
import AppLayouts from './layouts/AppLayouts';
import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Loading spinning />}>
      <AppLayouts />
    </Suspense>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
