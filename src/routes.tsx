import { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { NotFound } from './pages/NotFound/NotFound';

const appRoutes = [
  {
    title: 'Gross Profit',
    path: '/gross-profit',
    component: lazy(() => import('./pages/GrossProfit/GrossProfit')),
    exact: true,
  },
  {
    title: 'Charts',
    path: '/charts',
    component: lazy(() => import('./pages/Charts/Charts')),
    exact: true,
  },
];

const AppRoutes = () => (
  <Switch>
    <Route path="/" exact>
      <Redirect to="/gross-profit" />
    </Route>
    {appRoutes.map((route, index) => (
      <Route key={index} path={route.path} exact={route.exact} component={route.component} />
    ))}
    <Route path="*" component={NotFound} />
  </Switch>
);

export default AppRoutes;
