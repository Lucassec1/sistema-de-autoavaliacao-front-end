import styled from "styled-components"

export const Container = styled.div``;

export const Row = styled.div`
    padding: 0 2%;
    display: flex;
    flex-wrap: wrap;
`;

export const CardUsuarios = styled.div`
    display: flex;
    width: 50rem;
    height: 20rem;
    background: #FAFAFA;
    border: 1px solid #EBEBEB;
    box-shadow: 0px 1px 5px rgba(32, 90, 177, 0.1);
    border-radius: 10px;
`;

export const UsersContainer = styled.div`
    height: 30rem;
    background: #FAFAFA;
    border: 1px solid #EBEBEB;
    box-shadow: 0px 1px 5px rgba(32, 90, 177, 0.1);
    border-radius: 10px;
`;

export const UsersContent = styled.ul` 
    margin: 0;
    padding: 0;
`;

export const UserLi = styled.li`
    padding: 2.3% 2%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    border-bottom: 1px solid rgba(37, 38, 40, 0.2);
`;

export const UserNameContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 3%;
    width: 90%;
`;

export const Grafico = styled.div`
    width: 45%;
    height: 30rem;
    background: #FAFAFA;
    border: 1px solid #EBEBEB;
    box-shadow: 0px 1px 5px rgba(32, 90, 177, 0.1);
    border-radius: 10px;
    //margin-top: 22rem;
    //margin-left: 4%;
    
    
`;

export const NomeUsuario = styled.div`
    font-family: 'Mulish';
    font-style: normal;
    font-size: 1.2rem;
    line-height: 22px;
    color: #06152B;
    //width: 17rem;
   // width: 100%;
`;

export const HeaderRenderUsusarios = styled.div` 
    font-size: 1.5rem;
    color: #36383A;
    padding: 2% 1%;
    margin-bottom: 6%;
`;