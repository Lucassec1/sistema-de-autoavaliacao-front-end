import React, { useState, useEffect } from 'react';
import api from '../../../api';

import { PrimaryButton } from '../../../Components/PrimaryButton/style';
import { SecondaryButton } from "../../../Components/SecondaryButton/style.js";
import { MdOutlineEdit } from "react-icons/md";

import { 
    Modal,
    Form,
    Input,
    Select
} from 'antd';

function EditarGrupo (props) {
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [editSelectedItems, setEditSelectedItems] = useState([]);
    const [pessoas, setPessoas] = useState([]);
    const [editStatus, setEditStatus] = useState(props.dados.status);
    const [editNome, setEditNome] = useState(props.dados.nome)
    const { Option } = Select;
    const [filteredOptions, setFilteredOptions] = useState(pessoas);

    useEffect(() => {
        api.get("/usuarios")
        .then(resp => {
            setPessoas(resp.data) 
            setFilteredOptions(resp.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);
    
    const showModal = () => {
        setVisible(true);
    };

    const filter = (nome) => {
        if (nome !== "") {
            console.log(nome)
            const results = pessoas.filter((o) => o.nome.toLowerCase().includes(nome.toLowerCase()))
            setFilteredOptions(results)
        }
        else setFilteredOptions(pessoas) 
    }

    const handleCancel = () => {
        setVisible(false);
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setVisible(false);
        }, 3000);
    };

    function Editar(e) {
        e.preventDefault()
        setLoading(true)
        api.
            put(`/grupos/${props.dados.id}`, {
                nome: editNome,
                status: editStatus,
                pessoas: editSelectedItems.map(int => parseInt(int))
        })
        .then(res => {
            console.log('Deu certo')
            setVisible(false)
            props.update()
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    return (
        <>
            <div>
                <PrimaryButton type="primary" onClick={showModal} style={{ marginTop: '5%', marginLeft: '1%', display: 'flex', justifyContent: 'center' }}>
                    <MdOutlineEdit size={18} />
                </PrimaryButton>

                <Modal
                    visible={visible}
                    title="Editar Pessoa"
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                        <SecondaryButton key="back" onClick={handleCancel}>
                            Cancelar
                        </SecondaryButton>,
                        <PrimaryButton key="submit" type="primary" loading={loading} onClick={(e) => Editar(e)} >
                            Salvar
                        </PrimaryButton>
                    ]}
                >

                    <Form
                        layout='vertical'
                    >
                        <Form.Item
                            label="Nome"
                            name="Nome"
                            initialValue={editNome}
                            rules={[
                                {
                                    required: true,
                                    message: 'O Nome é obrigatório!',
                                },
                            ]}
                        >
                            <Input type='text' placeholder="Digite um novo Nome"/>
                        </Form.Item>
                    
                        <Form.Item
                            label="Pessoas"
                            name="Pessoas"
                            onChange={(e) => { setEditNome(e.target.value); filter(e.target.value)}}
                            rules={[
                                {
                                    required: true,
                                    message: 'Selecione pelo menos uma pessoa.',
                                },
                            ]}
                        >
                            {console.log(filteredOptions)}
                            <Select
                                mode="multiple"
                                placeholder="Pessoas"
                                initialValue={editSelectedItems}
                                onChange={setEditSelectedItems}
                                style={{
                                    width: '100%',
                                }}
                                >
                                {filteredOptions.map((item) => 
                                    (<Select.Option key={item.id} value={item.id}>
                                    {item.nome}
                                    </Select.Option>)
                                )}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Status"
                            name="Status"
                            initialValue={`${editStatus}`}
                            rules={[
                                {
                                    required: true,
                                    message: 'O Status é obrigatório!',
                                },
                            ]}
                            >
                            <Select
                                placeholder="Selecione o novo Status"
                                style={{
                                    width: '100%',
                                }}
                                onChange={(e) => setEditStatus(e)}
                            >
                                <Option value="1">Ativo</Option>
                                <Option value="0">Inativo</Option>
                            </Select>
                        </Form.Item>
                    </Form>
                </Modal>
                
            </div>
        </>
    )
}

export default EditarGrupo;