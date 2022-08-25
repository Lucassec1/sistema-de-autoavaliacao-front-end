import React from 'react';
import { SmileOutlined, UserOutlined } from '@ant-design/icons';
//import { Avatar, Button, Form, Input, InputNumber, Modal, Typography } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space, Avatar, InputNumber, Modal, Typography } from 'antd';
import api from '../../../../api';
import { Select } from 'antd';

const { Option } = Select;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const useResetFormOnCloseModal = ({ form, visible }) => {
    const prevVisibleRef = useRef();
    useEffect(() => {
        prevVisibleRef.current = visible;
    }, [visible]);
    const prevVisible = prevVisibleRef.current;
    useEffect(() => {
        if (!visible && prevVisible) {
            form.resetFields();
        }
    }, [form, prevVisible, visible]);
};

const ModalForm = ({ visible, onCancel }) => {
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [cpf, setCpf] = useState()
    const [foto, setFoto] = useState()
    const [senha, setSenha] = useState('')
    const [tipo, setTipo] = useState([])
    const handleChange = (value) => {
        console.log(`selected ${value}`);
        setTipo(value);
    };

    var Usuarios = [];

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

    const [form] = Form.useForm();
    useResetFormOnCloseModal({
        form,
        visible,
    });

    const onOk = () => {
        //form.submit();
        Usuarios.push({
            nome: nome,
            email: email,
            senha: senha,
            cpf: cpf,
            foto: foto,
            tipo: tipo
        })
        console.log(Usuarios);
    };

    return (
        <Modal title="Basic Drawer" visible={visible} onOk={onOk} onCancel={onCancel}>
            <Form form={form} layout="vertical" name="userForm">
                <Form.Item 
                    label="Tipo"
                    name={'tipo'}
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
                    name={'nome'}
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
                    label="Cpf"
                    name={'cpf'}
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
                    label="Email"
                    name={'email'}
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
                    name={'senha'}
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
                    label="Foto"
                    name={'foto'}
                    value={foto}
                    onChange={e => setFoto(e.target.value)}
                >
                    <Input type='text' />
                </Form.Item>
                {/*<Form.Item>
                    <Button type="primary" htmlType="submit" onClick={(e) => Cadastrar(e)}>
                        Submit
                    </Button>
                </Form.Item>*/}
            </Form>
        </Modal>
    );
};

const AddPessoas = () => {
    const [visible, setVisible] = useState(false);

    const showUserModal = () => {
        setVisible(true);
    };

    const hideUserModal = () => {
        setVisible(false);
    };

    const onFinish = (values) => {
        console.table(values);
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

    const Usuarios = []

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
        <Form.Provider
            onFormFinish={(name, { values, forms }) => {
                console.log(Usuarios);
                if (name === 'userForm') {
                    const { basicForm } = forms;
                    const users = basicForm.getFieldValue('users') || [];
                    basicForm.setFieldsValue({
                        users: [...users, values],
                    });
                    setVisible(false);
                }
            }}
        >
            <Form {...layout} name="basicForm" onFinish={onFinish}>
                <Form.Item
                    name="Group"
                    label="Group Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="User List"
                    shouldUpdate={(prevValues, curValues) => prevValues.users !== curValues.users}
                >
                    {({ getFieldValue }) => {
                        const users = getFieldValue('users') || [];
                        return users.length ? (
                            <ul>
                                {users.map((user, index) => (
                                    <li key={index} className="user">
                                        <Avatar icon={<UserOutlined />} />
                                        {user.tipo} - {user.nome} - {user.cpf} - {user.email} - {user.senha} - {user.foto}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <Typography.Text className="ant-form-text" type="secondary">
                                ( <SmileOutlined /> No user yet. )
                            </Typography.Text>
                        );
                    }}
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button htmlType="submit" type="primary">
                        Submit
                    </Button>
                    <Button
                        htmlType="button"
                        style={{
                            margin: '0 8px',
                        }}
                        onClick={showUserModal}
                    >
                        Add User
                    </Button>
                </Form.Item>
            </Form>

            <ModalForm visible={visible} onCancel={hideUserModal} />
        </Form.Provider>
    );
};

export default AddPessoas;