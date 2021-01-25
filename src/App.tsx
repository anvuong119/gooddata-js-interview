import { Layout } from 'antd';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Footer } from '_components/layouts/Footer';
import { Header } from '_components/layouts/Header';
import { MenuNavigation } from '_components/layouts/MenuNavigation';
import AppRoutes from '_routes';
import styles from './App.module.scss';

const { Content } = Layout;

const App: React.FC = () => {
  const { t } = useTranslation();
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
            <Footer copyright={t('layout.footer_copyright')} />
          </div>
        </Layout>
      </Router>
    </>
  );
};

export default App;
