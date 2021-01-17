import { lazy } from 'react';

const GrossProfit = lazy(() => import('./GrossProfit'));

const grossProfitRoutes = [
  {
    title: 'Gross Profit',
    path: '/gross-profit',
    component: GrossProfit,
    exact: true,
  },
];

export default grossProfitRoutes;
