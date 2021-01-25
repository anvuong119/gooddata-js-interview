import { BarChartOutlined, LineChartOutlined } from '@ant-design/icons';
import { Divider, Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '_assets/images/logo.jpg';
import styles from './MenuNavigation.module.scss';

const { Sider } = Layout;
const { Item } = Menu;

interface MenuNavigationProps {
  collapsed: boolean;
}
interface Menus {
  title: string;
  name: string;
  route: string;
  icon: React.ReactNode;
}

const menus: Menus[] = [
  {
    title: 'layout.menu_gross_profit',
    name: 'GROSS_PROFIT',
    route: '/gross-profit',
    icon: <BarChartOutlined />,
  },
  {
    title: 'layout.menu_charts',
    name: 'CHARTS',
    route: '/charts',
    icon: <LineChartOutlined />,
  },
];

export const MenuNavigation: React.FC<MenuNavigationProps> = ({ collapsed }) => {
  const { t } = useTranslation();
  return (
    <Sider
      width={256}
      breakpoint="lg"
      trigger={null}
      collapsible
      collapsed={collapsed}
      className={styles.navigation}
    >
      <div className={styles.brand}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          {!collapsed && <h1>{t('layout.title_gooddata')}</h1>}
        </div>
      </div>
      <Divider />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[menus[0].name]}>
        {menus.map((menu) => (
          <Item key={menu.name} icon={menu.icon}>
            <Link to={menu.route}>{t(menu.title)}</Link>
          </Item>
        ))}
      </Menu>
    </Sider>
  );
};
