
import React from 'react';
import Tabela from './Componentes/Tabela';
import AddPessoas from './Componentes/AddPessoas/index';
import { Divider } from 'antd';
import { Container, Header } from './styles';

export default function Cadastros() {
  
  return (
    <>
      <Container>
        <Header>
          <h2>Cadastro de Usuários</h2>
          <AddPessoas />
        </Header>
        <Divider />
        <Tabela />
      </Container>
    </>
  )
}
