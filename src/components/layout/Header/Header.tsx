import React, { FunctionComponent } from 'react';
import { Dropdown, Layout, Menu, Space, Typography } from 'antd';
import { DownOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
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
    <Layout.Header className={styles.header}>
      <div className={styles.button} onClick={toggleCollapse}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <div>
        <Dropdown overlay={menu}>
          <span>
            <Space>
              <Text type="warning">Hi</Text>
              <Text type="success" strong>
                <DownOutlined />
              </Text>
            </Space>
          </span>
        </Dropdown>
      </div>
    </Layout.Header>
  );
};
