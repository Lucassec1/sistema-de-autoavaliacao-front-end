import styled from "styled-components";

export const Container = styled.div`
    height: 77px;
    width: 100%;

    background-color: var(--Primary);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 20px;
`;

export const Logo = styled.div`
    width: 40px;
    height: 40px;

    border-radius: 50%;

    background-color: white;
    border: none;
`;

export const Info = styled.div`
    width: 180px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
`;
