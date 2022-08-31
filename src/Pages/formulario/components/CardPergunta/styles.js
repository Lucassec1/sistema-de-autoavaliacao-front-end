import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  border-left: 5px solid #0e4d8770;
`;

export const Titulo = styled.input`
  border: 0;
  background-color: transparent;
  font-size: 25px;
  color: #0e4d87;
  width: 100%;
  margin-bottom: 10px;
`;

export const NotaButtons = styled.div`
  display: flex;

  input + input {
    margin-left: 8px;
  }
`;

export const Nota = styled.input`
  height: 25px;
  width: 25px;
  background-color: #0e4d87;
  color: black;
`;

