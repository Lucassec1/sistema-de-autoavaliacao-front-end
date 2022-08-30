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

