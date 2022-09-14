import styled from "styled-components";
import { Menu, Avatar } from 'antd';

export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
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

export const CustomAvatar = styled(Avatar)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProfileContainer = styled.div`
    display: flex;
    align-items : center;
    justify-content: center;
    gap: 3%;
    //border: 1px solid red;
`;

export const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
    //gap: 10px;
    //border: 1px solid red;
    text-align: start;
`;

export const Name = styled.h3`
    color: var(--Text);
    font-weight: 700;
    font-size: 1.4rem;
`;

export const UserType = styled.span`
    background-color: var(--Primary);
    width: fit-content;
    padding: 1.5% 3%;
    border-radius: 4px;
    color: var(--Background);
    font-size: 0.9rem;
`;