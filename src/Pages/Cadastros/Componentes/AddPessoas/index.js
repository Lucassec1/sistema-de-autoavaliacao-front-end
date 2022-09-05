import React, { useState } from 'react';
import api from '../../../../api';

import { Button, Modal, Form, Input } from 'antd';
import { AiOutlineUserAdd } from "react-icons/ai";
import { Select } from 'antd';
import { AddButton } from './style';
import { PrimaryButton } from "../../../../Components/PrimaryButton/style.js";
import { SecondaryButton } from "../../../../Components/SecondaryButton/style.js";
import { propTypes } from 'react-bootstrap/esm/Image';

const { Option } = Select;
const Cadastro = (props) => {
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    
    const showModal = () => {
        setVisible(true);
    };
    
    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setVisible(false);
        }, 3000);
    };

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // select
    const handleChange = (value) => {
        setTipo(value);
        if (value === 3) {
            setDisableSenha(true)
        } else {
            setDisableSenha(false)
        }
    };
    
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [cpf, setCpf] = useState()
    const [foto, setFoto] = useState()
    const [senha, setSenha] = useState('')
    const [tipo, setTipo] = useState(3)
    const [disableSenha, setDisableSenha] = useState(true)
    
    const handleCancel = () => {
        setVisible(false);
    };
    
    function Cadastrar(e) {
        e.preventDefault()
        setLoading(true)
        tipo === 3 ? api.post('/auth/cadastrar', {
            nome: nome,
            email: email,
            senha: '',
            tipo: tipo,
            cpf: cpf,
            foto: foto,
        })
        .then(res => {
            setLoading(false)
            setVisible(false)
            console.log('Deu Certo!')
            props.update()
        })
        .catch(err => {
            setLoading(false)
            console.log('Bugou oh!')
        }) : api.post('/auth/cadastrar', {
            nome: nome,
            email: email,
            senha: senha,
            tipo: tipo,
            cpf: cpf,
            foto: foto,
        })
        .then(res => {
            setVisible(false)
            console.log('Deu Certo!')
            props.update()
        })
        .catch(err => {
            console.log('Bugou oh!')
        })
    }

    return (
        <>
            <PrimaryButton type="primary" onClick={showModal}>
                <AiOutlineUserAdd size={18} /><span>Adicionar Nova Pessoa</span>
            </PrimaryButton>
            <Modal
                visible={visible}
                title="Cadastrar Pessoa"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <SecondaryButton key="back" onClick={handleCancel}>
                        Cancelar
                    </SecondaryButton>,
                    <PrimaryButton key="submit" type="primary" loading={loading} onClick={(e) => Cadastrar(e)}>
                        Enviar
                    </PrimaryButton>
                ]}
            >
                <Form
                    layout='vertical'
                    name="basic"
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 0,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item label="Tipo"
                        name="Tipo"
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
                            <Option disabled={true} value={1}>Root</Option>
                        </Select>
                    </Form.Item>

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
                        <Input.Password type='password' disabled={disableSenha} />
                    </Form.Item>

                    <Form.Item
                        label="CPF"
                        name="Cpf"
                        maxLength={11}
                        minLength={11}
                        rules={[
                            {
                                required: true,
                                message: 'O CPF é obrigatório!',
                            },
                            {
                                pattern: /^(?:\d*)$/,
                                message: "O CPF deve conter apenas números!",
                            },
                        ]}
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                    >
                        <Input maxLength={11} minLength={11} />
                    </Form.Item>

                    <Form.Item
                        label="Foto"
                        name="Foto"
                        value={foto}
                        onChange={e => setFoto(e.target.value)}
                    >
                        <Input type='text' />
                    </Form.Item>


                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default Cadastro;