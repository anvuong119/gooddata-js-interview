import React, { FunctionComponent, ReactNode } from 'react';
import { Divider, Layout, Menu } from 'antd';
import { BarChartOutlined, LineChartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.jpg';
import styles from './Navigation.module.scss';

const { Sider } = Layout;
const { Item } = Menu;

export interface NavigationProps {
  collapsed: boolean;
}

export interface Menus {
  title: string;
  name: string;
  route: string;
  icon: ReactNode;
}

const menus: Menus[] = [
  {
    title: 'Gross Profit',
    name: 'GROSS_PROFIT',
    route: '/gross-profit',
    icon: <BarChartOutlined />,
  },
  {
    title: 'Charts',
    name: 'CHARTS',
    route: '/charts',
    icon: <LineChartOutlined />,
  },
];

export const Navigation: FunctionComponent<NavigationProps> = ({ collapsed }) => (
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
        {!collapsed && <h1>GOOD DATA</h1>}
      </div>
    </div>
    <Divider />
    <Menu theme="dark" mode="inline" defaultSelectedKeys={[menus[0].name]}>
      {menus.map((menu) => (
        <Item key={menu.name} icon={menu.icon}>
          <Link to={menu.route}>{menu.title}</Link>
        </Item>
      ))}
    </Menu>
  </Sider>
);
