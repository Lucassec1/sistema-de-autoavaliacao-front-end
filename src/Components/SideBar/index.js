import { Link, useNavigate } from "react-router-dom";
import { Button } from 'antd';
import React, { useContext, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { CustomAvatar, MenuContainer, CustomMenu, Sidebar, ProfileContainer, ProfileContent, Name, UserInfo, UserType } from './style';
import { IoHomeOutline } from "react-icons/io5";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { AiOutlineForm } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import UserContext from "../../UserContext";
import { FiUsers } from "react-icons/fi";

export default function SideBar(props) {
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
        <IoHomeOutline />
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
    getItem('Grupos', '4', 
    <Link to="/Grupos">
      <FiUsers />
    </Link>
  ),
  ];

  const navigate = useNavigate();

  const signout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("tipo");
    localStorage.removeItem('id');
    window.location.pathname = "/";
  }

  console.log(localStorage)

  const UserCpf = useContext(UserContext);
  return (
    <>
      <Sidebar>
        <ProfileContainer>
          <CustomAvatar
            size={64} icon={<UserOutlined />} />
          <ProfileContent>
            <Name>
              {localStorage.getItem('user')}
            </Name>
            <UserType>
              {localStorage.getItem('tipo') === '1' ? 'Root' : localStorage.getItem('tipo') === '2' ? 'Administrador' : localStorage.getItem('tipo') === '3' ? 'Usuário Comum' : 'quem é você? -policial disfarçado'}
            </UserType>
          </ProfileContent>
        </ProfileContainer>
        <MenuContainer
        >
          <CustomMenu
            // onMouseEnter={toggleCollapsed}
            // onMouseLeave={toggleCollapsed}
            defaultSelectedKeys={['1']}
            //defaultOpenKeys={['sub1']}
            mode="inline"
            theme="light"
            inlineCollapsed={false}
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