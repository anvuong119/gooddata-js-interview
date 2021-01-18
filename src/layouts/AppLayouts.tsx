import { Layout } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { Navigation } from '../components/layout/Navigation';
import AppRoutes from '../routes';
import styles from './AppLayouts.module.scss';

const { Content } = Layout;

const AppLayouts: FunctionComponent = () => {
  const [collapsed, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapsed);
  };

  return (
    <>
      <Router>
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
      </Router>
    </>
  );
};

export default AppLayouts;
