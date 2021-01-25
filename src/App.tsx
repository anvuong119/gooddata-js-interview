import { Layout } from 'antd';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from '_components/layouts/Footer';
import { Header } from '_components/layouts/Header';
import { MenuNavigation } from '_components/layouts/MenuNavigation';
import AppRoutes from '_routes';
import styles from './App.module.scss';

const { Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapsed);
  };

  return (
    <>
      <Router>
        <Layout className={styles.layout}>
          <MenuNavigation collapsed={collapsed} />
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

export default App;
