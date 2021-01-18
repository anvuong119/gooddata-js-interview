import { Layout } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import { Footer, Header, Navigation } from '../components/layout';
import AppRoutes from '../routes/AppRoutes';
import styles from './AppLayouts.module.scss';

const { Content } = Layout;

const AppLayouts: FunctionComponent = () => {
  const [collapsed, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapsed);
  };

  return (
    <>
      <Layout className={styles.layout}>
        <Navigation collapsed={collapsed} />
        <div className={styles.container} style={{ paddingTop: 72 }}>
          <Header collapsed={collapsed} toggleCollapse={handleCollapse} />
          <Content className={styles.content}>
            <AppRoutes />
          </Content>
          <Footer copyright="Copyright to Good Data - Duc Nguyen @2021" />
        </div>
      </Layout>
    </>
  );
};

export default AppLayouts;
