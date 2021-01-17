import React, { FunctionComponent, useState } from 'react';
import { Route } from 'react-router-dom';
import { Layout, BackTop } from 'antd';
import { Header, Navigation, Footer } from '../components/layout';
import grossProfitRoutes from '../pages/GrossProfit/routes';
import styles from './PrivateRoute.module.scss';

const { Content } = Layout;

const privateRoutes = [...grossProfitRoutes];

export interface PrivateRouteProps {}

const PrivateRoute: FunctionComponent<PrivateRouteProps> = () => {
  const [collapsed, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapsed);
  };

  return (
    <Layout className={styles.layout}>
      <Navigation collapsed={collapsed} />
      <Layout>
        <div className={styles.container} style={{ paddingTop: 72 }} id="primaryLayout">
          <Header collapsed={collapsed} toggleCollapse={handleCollapse} />
          <Content className={styles.content}>
            {privateRoutes.map(({ path, exact, component: Component }) => (
              <Route path={path} exact={exact} key={path} render={() => <Component />} />
            ))}
          </Content>
          <BackTop
            className={styles.backTop}
            // target={() => document.querySelector('#primaryLayout')}
          />
          <Footer copyright="Copyright to Good Data - Duc Nguyen @2021" />
        </div>
      </Layout>
    </Layout>
  );
};

export default PrivateRoute;
