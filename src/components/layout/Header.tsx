import {
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Dropdown, Layout, Menu, Space, Typography } from 'antd';
import React, { FunctionComponent } from 'react';
import styles from './Header.module.scss';

const { Text } = Typography;

export interface HeaderProps {
  collapsed: boolean;
  toggleCollapse: () => void;
}

export const Header: FunctionComponent<HeaderProps> = ({ collapsed, toggleCollapse }) => {
  const menu = (
    <Menu>
      <Menu.Item>Change Password</Menu.Item>
      <Menu.Item danger onClick={() => {}}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout.Header
      className={`${styles.header} ${styles.fixed} ${collapsed ? styles.collapsed : null}`}
    >
      <div className={styles.button} onClick={toggleCollapse}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <div>
        <Dropdown overlay={menu}>
          <span>
            <Space>
              <Avatar size="large" icon={<UserOutlined />} />
              <Text type="warning">Hi, </Text>
              <Text type="success" strong>
                Guest <DownOutlined />
              </Text>
            </Space>
          </span>
        </Dropdown>
      </div>
    </Layout.Header>
  );
};
