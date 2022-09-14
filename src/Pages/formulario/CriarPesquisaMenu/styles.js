import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

export const Top = styled.div`
  background-color: #70A1EA;
  height: 120px;
  padding: 20px;
  display: flex;
  align-items: center;

  h1 {
    color: white;
  }
`;

export const ContTipos = styled.div`
  display: flex;
  align-items: center;

  background-color: #ddd;

  width: 100%;
  height: 250px;
  padding: 50px;

  div + div {
    margin-left: 30px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;

  padding: 50px;
  font-weight: bolder;
`;

export const ContSearch = styled.div`
  display: flex;
  justify-content: space-between;
  width: 81.2vw;
  margin-left: 14.5px;
  
  h2 {
    width: 400px;
  }
`;

export const ContPesquisas = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;