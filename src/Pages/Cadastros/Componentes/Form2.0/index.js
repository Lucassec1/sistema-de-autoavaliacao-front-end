import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import api from '../../../../api';
import { Select } from 'antd';
const { Option } = Select;

const NewForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // select
    const handleChange = (value) => {
        console.log(`selected ${value}`);
        setTipo(value);
    };

    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [cpf, setCpf] = useState()
    const [foto, setFoto] = useState()
    const [senha, setSenha] = useState('')
    const [tipo, setTipo] = useState([])

    function Cadastrar(e) {
        e.preventDefault()
        api.post('/auth/cadastrar', {
            nome: nome,
            email: email,
            senha: senha,
            cpf: cpf,
            foto: foto,
            tipo: tipo
        })
            .then(res => {
                console.log('Deu Certo!')

            })
            .catch(err => {
                console.log('Bugou oh!')
            })
    }

    return (
        <Form
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            autoComplete="off">
            <Form.List name="users">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                            <Space
                                key={key}
                                style={{
                                    display: 'flex',
                                    marginBottom: 8,
                                }}
                                align="baseline"
                            >
                                <Form.Item label="Tipo"
                                    name={[name, 'tipo']}
                                    initialValue={3}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'O tipo é obrigatório!',
                                        },
                                    ]}>

                                    <Select
                                        onChange={handleChange}
                                    >
                                        <Option value={3}>Usuário Comum</Option>
                                        <Option value={2}>Administrador</Option>
                                        <Option value={1}>Root</Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    {...restField}
                                    label="Nome"
                                    name={[name, 'nome']}
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
                                    {...restField}
                                    label="Cpf"
                                    name={[name, 'cpf']}
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
                                    {...restField}
                                    label="Email"
                                    name={[name, 'email']}
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
                                    {...restField}
                                    minLength={8}
                                    label="Senha"
                                    name={[name, 'senha']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'A senha é obrigatória!',
                                        },
                                    ]}
                                    value={senha}
                                    onChange={e => setSenha(e.target.value)}
                                >
                                    <Input.Password type='password' />
                                </Form.Item>

                                <Form.Item
                                    {...restField}
                                    label="Foto"
                                    name={[name, 'foto']}
                                    value={foto}
                                    onChange={e => setFoto(e.target.value)}
                                >
                                    <Input type='text' />
                                </Form.Item>

                                <MinusCircleOutlined onClick={() => remove(name)} />
                            </Space>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add field
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <Form.Item>
                <Button type="primary" htmlType="submit" onClick={(e) => Cadastrar(e)}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default App;