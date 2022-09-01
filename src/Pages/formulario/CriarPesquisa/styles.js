import styled from 'styled-components';

export const Container = styled.div`
  background-color: #70A1EA;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 4px 4px 4px rgba(0,0,0,.3);
  position: relative;
`;

export const Pagina = styled.div`
  background-color: #eee;
  width: 70%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const CabecalhoPesquisa = styled.form`
    background-color: #fff;
    margin-top: 70px;
    width: 80%;
    height: 150px;
    padding: 30px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
`;

export const BodyPesquisa = styled.div`
  margin-top: 20px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AdicionarPergunta = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  margin-top: 15px;
  border: 1px dashed rgba(0,0,0,.6);
  box-shadow: 3px 3px 3px rgba(0,0,0,.1);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 30px;
  line-height: 10px;
  transition-duration: .2s;
  cursor: pointer;

  &:hover {
    background-color: lightblue;
    transition-duration: .2s;
  }
`;

export const ListaPerguntas = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div + div {
    margin-top: 20px;
  }
`;

export const BtnConcluir = styled.button`
  border: 0;

  color: white;
  background-color: #225BB1ee;

  padding: 5px 40px;
  border-radius: 5px;

  font-size: 17px;
  transition-duration: .2s;

  &:hover {
    background-color: #225BB1;
    transition-duration: .2s;
  }
`;

export const FixedBar = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  box-shadow: 4px 4px 4px rgba(0,0,0,.05);
  padding: 10px;

  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 0;
`;