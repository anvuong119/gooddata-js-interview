import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { NotFound } from '../components/common';
import grossProfitRoutes from '../pages/GrossProfit/routes';

const appRoutes = [...grossProfitRoutes];

const AppRoutes = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/gross-profit" />
      </Route>
      {appRoutes.map((route, index) => (
        <Route key={index} path={route.path} exact={route.exact} component={route.component} />
      ))}
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default AppRoutes;
