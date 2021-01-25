import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Menu, Space, Typography } from 'antd';
import React from 'react';
import styles from './HeaderInfo.module.scss';

const { Text } = Typography;

const HeaderInfo: React.FC = () => {
  const menu = (
    <Menu>
      <Menu.Item>Change password</Menu.Item>
      <Menu.Item danger onClick={() => {}}>
        Log out
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.headerInfo}>
      <Dropdown overlay={menu}>
        <span>
          <Space>
            <Text type="warning">Hi, </Text>
            <Text type="success" strong>
              Guest
            </Text>
            <Avatar size="large" icon={<UserOutlined />} />
            <DownOutlined />
          </Space>
        </span>
      </Dropdown>
    </div>
  );
};

export default HeaderInfo;
