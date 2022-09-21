import React, { useState, useEffect } from 'react';
import api from '../../../api';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { PrimaryButton } from '../../../Components/PrimaryButton/style';
import { SecondaryButton } from "../../../Components/SecondaryButton/style.js";
import { FiMoreVertical } from "react-icons/fi";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { ButtonEditar } from './styles'

import { 
    Modal,
    Form,
    Input,
    Select,
    Button,
    Dropdown,
    Menu
} from 'antd';

import Dialog from '../../Cadastros/Componentes/deletemessage';

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

    const { confirm } = Modal;

    const deleteUser = () => {
        api
            .delete(`/grupos/${props.dados.id}`)
            .then(() => {
                props.update()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const showDeleteConfirm = () => {
        confirm({
          title: 'Tem certeza que deseja deletar esse grupo?',
          icon: <ExclamationCircleOutlined />,
          okText: 'Sim',
          okType: 'danger',
          cancelText: 'Não',
      
          onOk() {
            //console.log('OK');
            console.log(`/grupos/${props.dados.id}`);
            deleteUser()
          },
      
          onCancel() {
            //console.log('Cancel');
          },
        });
      };

    const handleButtonClick = (e) => {
        console.log('click left button', e);
      };
      
    const handleMenuClick = (e) => {
        
        if (e.key === "1" ) {
            setVisible(true);
        } else if (e.key === "2") {
            showDeleteConfirm()
        }
    };

    const menu = (
        <Menu
          onClick={handleMenuClick}
          items={[
            {
                label: 'Editar',
                key: '1',
                icon: <MdOutlineEdit size={18} />
            },
            {
              label: 'Apagar',
              key: '2',
              icon: <MdDeleteOutline size={18}/>

            },
          ]}
        />
      );
    
    return (
        <>
            <div>
                <ButtonEditar>
                <Dropdown overlay={menu}>
                    <Button>
                        <FiMoreVertical />
                    </Button>
                </Dropdown>
                </ButtonEditar>

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