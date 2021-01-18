import { Layout } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import { Route } from 'react-router-dom';
import { Footer, Header, Navigation } from '../components/layout';
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
        <div className={styles.container} style={{ paddingTop: 72 }}>
          <Header collapsed={collapsed} toggleCollapse={handleCollapse} />
          <Content className={styles.content}>
            {privateRoutes.map(({ path, exact, component: Component }) => (
              <Route path={path} exact={exact} key={path} render={() => <Component />} />
            ))}
          </Content>
          <Footer copyright="Copyright to Good Data - Duc Nguyen @2021" />
        </div>
      </Layout>
    </Layout>
  );
};

export default PrivateRoute;
