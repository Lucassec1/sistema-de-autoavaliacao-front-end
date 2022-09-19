import React, { useState, useEffect } from 'react';
import api from '../../api';

import { PrimaryButton } from "../../Components/PrimaryButton/style";
import { SecondaryButton } from '../../Components/SecondaryButton/style';
import { AiOutlineUserAdd } from "react-icons/ai";

import { 
    Modal,
    Form,
    Input,
    Select
} from 'antd';

import Card from './components/card'

function Grupo() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [pessoas, setPessoas] = useState([]);
    const [status, setStatus] = useState([]);
    const [nome, setNome] = useState()
    const { Option } = Select;
    const [grupos, setGrupos] = useState()

    const getGrupos = () => {
        api
            .get("/grupos")
            .then((response) => {
                setGrupos(response.data);
                console.log("foi");
            })
            .catch((err) => {

            });
    };

    if(!grupos) getGrupos()
    
    useEffect(() => {
        api.get("/usuarios")
        .then(resp => {
            setPessoas(resp.data) 
        })
        .catch(err => {
            console.log(err)
        })
    }, []);
    
    const showModal = () => {
        setVisible(true);
    };
    const filteredOptions = pessoas.filter((o) => !selectedItems.includes(o.nome));

    const handleCancel = () => {
        setVisible(false);
        form.resetFields();
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setVisible(false);
        }, 3000);
    };

    function Cadastrar(e) {
        e.preventDefault()
        setLoading(true)
        api.
            post('/grupos', {
                nome: nome,
                status: status,
                pessoas: selectedItems.map(int => parseInt(int))
        })
        .then(res => {
            console.log('Deu certo')
            setVisible(false)
            form.resetFields()
            getGrupos()
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    return (
        <>
            <div>
                <PrimaryButton type="primary" onClick={showModal} style={{ marginTop: '5%', marginLeft: '1%' }}>
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
                        <PrimaryButton key="submit" type="primary" loading={loading} onClick={(e) => Cadastrar(e)} >
                            Enviar
                        </PrimaryButton>
                    ]}
                >

                    <Form
                        layout='vertical'
                        form={form}
                    >
                        <Form.Item
                            label="Nome"
                            name="Nome"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            rules={[
                                {
                                    required: true,
                                    message: 'O Nome é obrigatório!',
                                },
                            ]}
                        >
                            <Input type='text' placeholder="Digite um Nome"/>
                        </Form.Item>
                    
                        <Form.Item
                            label="Pessoas"
                            name="Pessoas"
                            rules={[
                                {
                                    required: true,
                                    message: 'Selecione pelo menos uma pessoa.',
                                },
                            ]}
                        >
                            <Select
                                mode="multiple"
                                placeholder="Pessoas"
                                value={selectedItems}
                                onChange={setSelectedItems}
                                style={{
                                    width: '100%',
                                }}
                                >
                                {filteredOptions.map((item) => (
                                    <Select.Option key={item.id} value={item.id}>
                                    {item.nome}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Status"
                            name="Status"
                            rules={[
                                {
                                    required: true,
                                    message: 'O Status é obrigatório!',
                                },
                            ]}
                            >
                            <Select
                                placeholder="Status"
                                style={{
                                    width: '100%',
                                }}
                                onChange={(e) => setStatus(e)}
                            >
                                <Option value="1">Ativo</Option>
                                <Option value="0">Inativo</Option>
                            </Select>
                        </Form.Item>
                    </Form>
                            

                </Modal>
                <Card grupo={grupos}/>
            </div>
        </>
    )
}

export default Grupo;