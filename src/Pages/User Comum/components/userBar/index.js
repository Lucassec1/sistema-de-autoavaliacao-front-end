import React, { useEffect, useState } from "react";
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, message, Space, Tooltip } from 'antd';
import { Container, Foto, Logo } from './styles'
import fotoUser from '../../../../assets/user.svg';

export default function UserHeader() {
    const [foto, setFoto] = useState(localStorage.getItem('foto'));
    console.log(foto)

    const handleButtonClick = (e) => {
        message.info('Click on left button.');
        console.log('click left button', e);
    };

    
    const signout = () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("user")
        localStorage.removeItem("tipo")
        window.location.pathname = "/";
      }

    const menu = (
        <Menu
            onClick={signout}
            items={[
                {
                    label: 'Logout',
                    key: '1',
                    icon: <UserOutlined />,
                }
            ]}
        />
    );

    return (
        <Container>
            <Logo></Logo>
            <div>Informações da Instituição</div>

            {foto == "" ? <Foto><img src={foto} /></Foto> : <Dropdown.Button overlay={menu} placement="bottom" icon={<UserOutlined />} >
            {localStorage.getItem('user')}
                </Dropdown.Button>}
        </Container>
    )
}