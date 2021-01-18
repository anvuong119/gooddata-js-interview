// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { FunctionComponent, Suspense } from 'react';
import AppLayouts from './layouts/AppLayouts';
import { Loading } from './components/common';

const App: FunctionComponent = () => (
  <>
    <Suspense fallback={<Loading spinning />}>
      <AppLayouts />
    </Suspense>
  </>
);

export default App;
