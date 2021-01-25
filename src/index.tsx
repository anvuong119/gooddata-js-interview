// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <App />,
  document.getElementById('root'),
);
registerServiceWorker();
