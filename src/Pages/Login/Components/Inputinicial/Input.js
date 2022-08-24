import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Input, Tooltip, Form, Button } from 'antd';
import api from '../../../../api';
import {ButtonContainer, LoginButton} from "./styles.js";

const formatNumber = (value) => new Intl.NumberFormat().format(value);

const NumericInput = (props) => {
  const { value, onChange } = props;

  const handleChange = (e) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;

    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      onChange(inputValue);
    }
  }; // '.' at the end or only '-' in the input box.

  const handleBlur = () => {
    let valueTemp = value;

    if (value.charAt(value.length - 1) === '.' || value === '-') {
      valueTemp = value.slice(0, -1);
    }

    onChange(valueTemp.replace(/0*(\d+)/, '$1'));
  };

  const title = value ? (
    <span className="numeric-input-title">{value !== '-' ? formatNumber(Number(value)) : '-'}</span>
  ) : (
    'Digite seu CPF'
  );

  const [visible, setVisible] = useState('none')
  const [cpf, setCpf] = useState();
  const [senha, setSenha] = useState();

  function PostCpf(e) {
    e.preventDefault()
    api.post('/auth/login', {
      cpf: cpf,
      senha: senha
    })
      .then(res => {
        // console.log(res)
        console.log(e)
        window.location.pathname = '/cadastros'
      })
      .catch(e => {

        if (e.response.status == 401) {
          setVisible('block');
          console.log('Erroooooo');
          setSenha('')
        }
      })
  }

  return (
    <>
      {/* <Tooltip trigger={['focus']} title={title} placement="topLeft" overlayClassName="CPF">
      <Input
        {...props}
        // onChange={(e) => {handleChange(e); setCpf(e.target.value)}}
        onBlur={handleBlur}
        placeholder="CPF"
        maxLength={11}
        // value={cpf}
        // type='number'
      />
    </Tooltip> */}
      <Form
        name="basic"
        layout="vertical"
        size='large'
        labelCol={{
          span: 0,
        }}
        wrapperCol={{
          span: 0,
        }}
        initialValues={{
          remember: true,
        }}
        //onFinish={onFinish}
        //onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          minLength={11}
          maxLength={11}
          label="CPF"
          name="cpf"
          rules={[
            {
              required: true,
              message: 'O CPF é obrigatório!',
            },
          ]}
          value={cpf}
          onChange={(e) => { handleChange(e); setCpf(e.target.value)}}
        >
          <Input placeholder='Digite seu CPF' />
        </Form.Item>

        <Form.Item
          style={{ display: visible }}
          minLength={8}
          label="Senha"
          name="senha"
          rules={[
            {
              required: true,
              message: 'A senha é obrigatória!',
            },
          ]}
          value={senha}
          onChange={e => setSenha(e.target.value)}
        >
          <Input.Password placeholder='Digite sua senha' type='password' />
        </Form.Item>

        <ButtonContainer>
          <LoginButton type="primary" size='large' onClick={PostCpf}>Entrar</LoginButton>
        </ButtonContainer>
      </Form>
    </>

  );
};



const Inputt = () => {
  const [value, setValue] = useState('');
  return (
    <NumericInput
      style={{
        width: 350,
        height: 50,
        borderRadius: 5,
      }}
      value={value}
      onChange={setValue}

    />
  );

};


export default Inputt;