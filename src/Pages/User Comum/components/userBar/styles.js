import styled from "styled-components";

export const Container = styled.div`
    height: 77px;
    width: 100%;

    background-color: var(--Primary);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    padding-left: 20px;
    padding-right: 20px;
`;

export const Foto = styled.button`
    width: 50px;
    height: 50px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center
`;

export const Logo = styled.div`
    width: 50px;
    height: 50px;

    border-radius: 50%;

    background-color: grey;
    border: none;
`;

