import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Menu, Space, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './HeaderInfo.module.scss';
import LanguageTranslate from './LanguageTranslate';

const { Text } = Typography;

const HeaderInfo: React.FC = () => {
  const { t } = useTranslation();

  const menu = (
    <Menu>
      <Menu.Item>{t('layout.header_change_password')}</Menu.Item>
      <Menu.Item danger onClick={() => {}}>
        {t('layout.header_logout')}
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.headerInfo}>
      <LanguageTranslate />
      <Dropdown overlay={menu}>
        <span>
          <Space>
            <Text type="warning">{t('layout.header_hi')}</Text>
            <Text type="success" strong>
              {t('layout.header_guest')}
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
