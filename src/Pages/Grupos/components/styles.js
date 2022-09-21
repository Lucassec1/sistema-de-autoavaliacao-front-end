import styled from "styled-components";

export const CardG = styled.div`
    width: 14rem;
    height: 16rem;
    background: #FAFAFA;
    border: 1px solid #EBEBEB;
    box-shadow: 0px 1px 5px rgba(32, 90, 177, 0.1);
    border-radius: 7px;
    border-left: 5px solid #205AB1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin-right: 3%;
    padding: 1%;
    gap: 5%;
    transition: 0.3s;
    :hover {
        transform: scale(1);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
    margin-bottom: 2%;
    
`;

export const NomeGrupo = styled.div`
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    color: #252628;
    margin-top: 10%;
`;

export const OrgCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7rem;
    flex-wrap: wrap;
    
`;

export const Formatapag = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    margin-top: 1%;

`;

export const ButtonEditar = styled.div`
    width: 12rem;
    display: flex;
    justify-content: flex-end;
    //align-items: flex-start;
    margin-bottom: 20%;
`;
