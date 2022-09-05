
import React, { useState } from 'react';
import Tabela from './Componentes/Tabela';
import AddPessoas from './Componentes/AddPessoas/index';
import { Divider } from 'antd';
import { Container, Header } from './styles';
import api from '../../api';

export default function Cadastros() {
  const [usuario, setUsuario] = useState()
  const getCadastros = async () => {
    api
      .get('/usuarios')
      .then(response => {
        setUsuario(response.data);
      })
      .catch(err => {
        if (err.response.status == 401) {
          window.location.href = '/';
        }
        else console.log(err.message);
      })
  }
  if (!usuario) getCadastros()

  return (
    <>
    {usuario &&
      <Container>
        <Header>
          <h2>Cadastro de Usuários</h2>
          <AddPessoas getCadastros={getCadastros}/>
        </Header>
        <Divider />
        <Tabela usuario={usuario} getCadastros={getCadastros}/>
      </Container>
      }
    </>
  )
}
