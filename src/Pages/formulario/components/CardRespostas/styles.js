import { style } from "@mui/system";
import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  border-left: 5px solid #0e4d8770;
  position: relative;
`;

export const Titulo = styled.input`
  border: 0;
  background-color: transparent;
  font-size: 25px;
  color: #0e4d87;
  width: 100%;
  margin-bottom: 10px;
`;

export const RespostasContainer = styled.div`
  display: flex;
  gap: 3%;
  //border: 1px solid red;
`;

export const HeadersContainer = styled.div`
  //border: 1px solid red;
  color: var(--SecondaryText);
  display: flex;
  flex-direction: column;
  justify-content: end;
  //align-items: center;
  gap: 6px;
`;

export const RespostasHeader = styled.p`
  margin: 0;
`;

export const NotasHeader = styled.p`
  margin: 0;
`;

export const PercentualHeader = styled.p`
  margin: 0;
`;

export const NotaButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //border: 1px solid red;
  width: 100%;
`;

export const NotaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    //border: 1px solid red;
    height: 100%;
    margin: 0px !important;
    gap: 6px;
`;

export const Nota = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 4px;
  background-color: #0e4d87;
  color: var(--Text);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QtdRespostas = styled.span`
  font-weight: 500;
`;

export const PercentualRespostas = styled.span`
  color: var(--LowkeyText);
`;

export const BotaoExpadir = styled.button`
    color: var(--Primary);
    background: none;
    border: none;
    font-weight: 500;
    transition: 0.3s;

    &:hover {
        transition: 0.3s;
        color: var(--PrimaryHover);
        font-weight: 600;
        border-bottom: 1px solid var(--PrimaryHover);
    }
`;

export const DetalhesContainer = styled.div`
    border: 1px solid red;
`;

export const DetalhesTitle = styled.h6`
    font-size: 1.1rem;
    font-weight: 600;
`;

export const ListaPessoas = styled.ul``;

export const NomePessoa = styled.li``;

export const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 10px;
  background-color: transparent;
  border: 0;
`;
