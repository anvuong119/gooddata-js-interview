import React, { Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Loading } from '../components/common';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => (
  <Router>
    <Suspense fallback={<Loading spinning />}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/gross-profit" />
        </Route>
        <Route path="/">
          <PrivateRoute />
        </Route>
      </Switch>
    </Suspense>
  </Router>
);

export default AppRoutes;
