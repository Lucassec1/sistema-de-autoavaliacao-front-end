import React, { useEffect, useState } from "react";
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import {  
    Dropdown, 
    Menu, 
    message, 
 } from 'antd';
import { Container, 
    Foto, 
    Logo,
    Info,
 } from './styles'

export default function UserHeader() {
    const [foto, setFoto] = useState(localStorage.getItem('foto'));

    const handleButtonClick = (e) => {
        message.info('Click on left button.');
        console.log('click left button', e);
    };


    const signout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user")
        localStorage.removeItem("tipo")
        localStorage.removeItem("id")
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
            <div style={{width: '20%'}}>
                <Logo></Logo>
            </div>
            <div style={{width: '60%'}}>
                <Info>SENAI</Info>
            </div>
            <div style={{width: '20%'}}>
                <Dropdown.Button overlay={menu} placement="bottom" icon={<UserOutlined />} >
                </Dropdown.Button>
            </div>
        </Container>
    )
}