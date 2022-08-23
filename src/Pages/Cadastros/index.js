
// import Tabela from "../../Components/Tabela"

// export default function Cadastros() {
    
//     return (
//         <>
//             <main style={{marginLeft: '100px'}}>
//                 <h1>Cadastros</h1>
//                 <Tabela />
//             </main>
//         </>
//     )
// }

import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import api from '../../api';
import SideBar from '../../Components/SideBar';

export default function CadastroPessoa () {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [nome, setNome] = useState()
  const [email, setEmail] = useState()
  const [cpf, setCpf] = useState()
  const [foto, setFoto] = useState()
  const [senha, setSenha] = useState()

  function Cadastrar (e) {
    e.preventDefault()
    api.post('/cadastros',{
        nome: nome,
        email: email,
        senha: senha,
        cpf: cpf,
        foto: foto,
    })
    .then(res => {
        console.log('Deu Certo!')
    })
    .catch(err => {
        console.log('Bugou oh!')
        
    })
  }

  return (
    <>
    <SideBar />
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Nome"
        name="Nome"
        rules={[
          {
            required: true,
            message: 'O nome é obrigatório!',
          },
        ]}
        value={nome}
        onChange={e => setNome(e.target.value)}
      >
        <Input type='text' />
      </Form.Item>

      <Form.Item
        label="Email"
        name="Email"
        rules={[
          {
            required: true,
            message: 'O email é obrigatório!',
          },
        ]}
        value={email}
        onChange={e => setEmail(e.target.value)}
      >
        <Input type='email' />
      </Form.Item>

      <Form.Item
        label="Cpf"
        name="Cpf"
        maxLength={11}
        minLength={11}
        rules={[
          {
            required: true,
            message: 'O Cpf é obrigatório!',
          },
        ]}
        value={cpf}
        onChange={e => setCpf(e.target.value)}
      >
        <Input type='number' />
      </Form.Item>

      <Form.Item
        label="Foto"
        name="Foto"
        rules={[
          {
            required: true,
            message: 'A foto é obrigatória!',
          },
        ]}
        value={foto}
        onChange={e => setFoto(e.target.value)}
      >
        <Input type='text' />
      </Form.Item>

      <Form.Item
        minLength={8}
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'A senha é obrigatória!',
          },
        ]}
        value={senha}
        onChange={e => setSenha(e.target.value)}
      >
        <Input.Password type='password'/>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onSubmit={(e) => Cadastrar(e)}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  </>
  );
};

