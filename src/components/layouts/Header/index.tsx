import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import React from 'react';
import styles from './Header.module.scss';
import HeaderInfo from './HeaderInfo';

export interface HeaderProps {
  collapsed: boolean;
  toggleCollapse: () => void;
}

export const Header: React.FC<HeaderProps> = ({ collapsed, toggleCollapse }) => (
  <Layout.Header
    className={`${styles.header} ${styles.fixed} ${collapsed ? styles.collapsed : null}`}
  >
    <div className={styles.button} onClick={toggleCollapse}>
      {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </div>
    <HeaderInfo />
  </Layout.Header>
);
