import { Link, useLocation } from "react-router-dom";
import {
    ContainerOutlined,
    DesktopOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { MenuContainer, Sidebar, ProfileContainer, ProfileContent, Name, UserType } from './style';

export default function SideBar() {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

    const [collapsed, setCollapsed] = useState(true);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const items = [
      getItem('Home', '1', 
      <Link to="/">
        <PieChartOutlined />
      </Link>
      ),
      getItem('Cadastros', '2', 
        <Link to="/cadastros">
          <DesktopOutlined />
        </Link>
      ),
      getItem('Pesquisas', '3', 
        <Link to="/pesquisas">
          <ContainerOutlined />
        </Link>
      ),
    ];

    return (
        <>
          <Sidebar>
            <ProfileContainer>
              <Avatar size={64} icon={<UserOutlined />} />
              <ProfileContent>
                <Name>
                  Lucas Emmanuel Siqueira
                </Name>
                <UserType>
                  Root
                </UserType>
              </ProfileContent>
            </ProfileContainer>
            <MenuContainer
            >
                <Menu
                  onMouseEnter={toggleCollapsed}
                  onMouseLeave={toggleCollapsed}
                  defaultSelectedKeys={['1']}
                  //defaultOpenKeys={['sub1']}
                  mode="inline"
                  theme="light"
                  inlineCollapsed={collapsed}
                  items={items}
                />
            </MenuContainer>
          </Sidebar>
        </>
      );
}