import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { Loading } from '../components/common';

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
