import React, { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { NotFound } from '_components/pages/NotFound';

const appRoutes = [
  {
    title: 'Gross Profit',
    path: '/gross-profit',
    component: lazy(() => import('_components/pages/GrossProfit')),
    exact: true,
  },
  {
    title: 'Charts',
    path: '/charts',
    component: lazy(() => import('_components/pages/Charts/Charts')),
    exact: true,
  },
];

const AppRoutes = () => (
  <Switch>
    <Route path="/" exact>
      <Redirect to="/gross-profit" />
    </Route>
    {appRoutes.map((route, index) => {
      const Component = route.component;
      return (
        <Route key={index} path={route.path} exact={route.exact} component={() => <Component />} />
      );
    })}
    <Route path="*" component={NotFound} />
  </Switch>
);

export default AppRoutes;
