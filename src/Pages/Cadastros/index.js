
import React, { useState } from 'react';
// import api from '../../api';

import Tabela from './Componentes/Tabela';
import Form from './Componentes/Form';
import SideBar from '../../Components/SideBar';
export default function Cadastros() {
  
  return (
    <>
      <SideBar />
      <Tabela />
      <Form />
    </>
  )
}
