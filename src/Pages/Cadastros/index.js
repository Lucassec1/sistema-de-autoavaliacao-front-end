
import React, { useState } from 'react';
// import api from '../../api';
import Tabela from './Componentes/Tabela';
import Form from './Componentes/Form';
import SideBar from '../../Components/SideBar';
import AddPessoas from './Componentes/AddPessoas/index';

export default function Cadastros() {
  
  return (
    <>
      <div>
        <Tabela />
        <AddPessoas />
      </div>
    </>
  )
}
