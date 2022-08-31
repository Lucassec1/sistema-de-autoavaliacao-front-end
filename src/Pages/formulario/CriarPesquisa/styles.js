import styled from 'styled-components';

export const Container = styled.div`
  background-color: #70A1EA;
  width: 100%;

  display: flex;
  justify-content: center;

  box-shadow: 4px 4px 4px rgba(0,0,0,.3);
`;

export const Pagina = styled.div`
  background-color: #eee;
  width: 70%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
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
