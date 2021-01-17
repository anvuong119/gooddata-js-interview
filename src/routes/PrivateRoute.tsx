import React, { FunctionComponent, useState } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import { Header, Navigation } from '../components/layout';
import grossProfitRoutes from '../pages/GrossProfit/routes';

const { Content } = Layout;

const privateRoutes = [...grossProfitRoutes];

export interface PrivateRouteProps {
  isLoggedIn?: boolean;
}

const PrivateRoute: FunctionComponent<PrivateRouteProps> = () => {
  const [collapsed, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapsed);
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Navigation collapsed={collapsed} />
      <Layout>
        <Header collapsed={collapsed} toggleCollapse={handleCollapse} />
        <Content
          style={{
            padding: 20,
            background: '#FAFBFD',
            minHeight: 400,
          }}
        >
          {privateRoutes.map(({ path, exact, component: Component }) => (
            <Route path={path} exact={exact} key={path} render={() => <Component />} />
          ))}
        </Content>
      </Layout>
    </Layout>
  );
};

export default PrivateRoute;
