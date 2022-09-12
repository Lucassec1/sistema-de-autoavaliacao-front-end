import styled from "styled-components";
import { Menu } from 'antd';

export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 250px;
    width: 25vw;
    height: 100vh;
    border-right: 1px solid #EBEBEB;

    background-color: #F5F5F5;
    position: sticky;
    top: 0;
    left: 0;
`;

export const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 250px;
    width: 25vw;
    height: 70vh;
`;

export const CustomMenu = styled(Menu)`
    background-color: transparent;
`;

export const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`;

export const ProfileContent = styled.div`
    max-width: 140px;
`;

export const Name = styled.h3`
    margin: 0;
    line-height: 1.2;
`;

export const UserType = styled.span`
`;