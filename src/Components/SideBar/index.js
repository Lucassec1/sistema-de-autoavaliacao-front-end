import { Link, useNavigate } from "react-router-dom";
import { Button } from 'antd';
import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { MenuContainer, CustomMenu, Sidebar, ProfileContainer, ProfileContent, Name, UserType } from './style';
import { IoHomeOutline } from "react-icons/io5";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { AiOutlineForm } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";

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
      <Link to="/home">
        <IoHomeOutline  />
      </Link>
      ),
      getItem('Cadastros', '2', 
        <Link to="/cadastros">
          <BsFileEarmarkPerson />
        </Link>
      ),
      getItem('Pesquisas', '3', 
        <Link to="/pesquisas">
          <AiOutlineForm />
        </Link>
      ),
    ];

    const navigate = useNavigate();

    const signout = () =>{
      window.location.reload();
      localStorage.removeItem("token");
      window.location.pathname = "/";
    }

    return (
        <>
          <Sidebar>
            <ProfileContainer>
              <Avatar style={{display: "flex", alignItems: "center", justifyContent: "center"}} size={64} icon={<UserOutlined />} />
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
                <CustomMenu
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
            <Button icon={<IoIosLogOut />} onClick={signout}>
              Sair
            </Button>
          </Sidebar>
        </>
      );
}