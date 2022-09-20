import { Link, useNavigate } from "react-router-dom";
import { Button } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Image } from 'antd';
import { CustomAvatar, MenuContainer, CustomMenu, Sidebar, ProfileContainer, ProfileContent, Name, UserInfo, UserType } from './style';
import { IoHomeOutline } from "react-icons/io5";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { AiOutlineForm } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import UserContext from "../../UserContext";
import { FiUsers } from "react-icons/fi";
import api from "../../api";

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

  //console.log(localStorage)

  const userId = localStorage.getItem('id').replace(/\D/g, "")

  const [usuario, setUsuario] = useState();
  const [foto, setFoto] = useState();
  const nome = localStorage.getItem('user');

  function formataNome(nome) {
    const userName = nome.split(' ');
    return `${userName[0]} ${userName[userName.length-1]}`
  }

  useEffect(() => {
    const getCadastros = async () => {
      try {
        const response = await api.get('/usuarios/')
        setUsuario(response.data.filter(u => u.id === userId));
        setFoto(response.data.filter(u => u.id === userId)[0].foto)
      } catch(err) {
          if (err.response.status == 401) {
            window.location.href = '/';
          }
          else console.log(err.message);
        }
      }
      getCadastros()
  }, [])
  
  return (
    <>
      <Sidebar>
        <ProfileContainer>
          <CustomAvatar
            size={ 66 }
            src={<Image fallback="./assets/default-image.png" src={foto} preview={false} style={{width: 66, display: 'flex', alignItems: 'center' }} />} />
          <ProfileContent>
            <Name>
              {formataNome(nome)}
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