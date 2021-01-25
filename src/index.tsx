// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { Loading } from '_components/common';
import i18n from './i18n';
import './index.scss';
import App from './App';
import store from '_redux/store';
import registerServiceWorker from './registerServiceWorker';

i18n.init({
  interpolation: { escapeValue: false },
});

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <Suspense fallback={<Loading spinning />}>
        <App />
      </Suspense>
    </Provider>
  </I18nextProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
