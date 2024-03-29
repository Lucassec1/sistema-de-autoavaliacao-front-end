import React, { useState, useEffect } from 'react';
import api from '../../../api';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { PrimaryButton } from '../../../Components/PrimaryButton/style';
import { SecondaryButton } from "../../../Components/SecondaryButton/style.js";
import { FiMoreVertical } from "react-icons/fi";
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { ButtonEditar } from './styles'

import { 
    Modal,
    Form,
    Input,
    Select,
    Button,
    Dropdown,
    Menu, 
    Divider, 
    List, 
} from 'antd';

function EditarGrupo (props) {
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [visibleInspect, setVisibleInspect] = useState(false);
    const [editSelectedItems, setEditSelectedItems] = useState([]);
    const [pessoas, setPessoas] = useState();
    const [editStatus, setEditStatus] = useState(props.dados.status);
    const [editNome, setEditNome] = useState(props.dados.nome)
    const { Option } = Select;
    const [filteredOptions, setFilteredOptions] = useState();

    const getDetalhes = () => {
        api.get(`/grupos/${props.dados.id}`) 
        .then(response => {
            console.log(response.data)
            setFilteredOptions(response.data.pessoas)
            setEditSelectedItems(response.data.pessoas.map(i => i.id))
            setEditNome(response.data.nome)
            setEditStatus(response.data.status)
        })
    }
    if (!filteredOptions && visible) getDetalhes()

    const getPessoas = () => { api.get("/usuarios").then(res => setPessoas(res.data)) }
    if (!pessoas && visible) getPessoas()
    
    const showModal = () => {
        setVisible(true);
    };

    const showModalInspect = () => {
        setVisibleInspect(true);
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

    const handleCancelInspect = () => {
        setVisibleInspect(false);
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setVisible(false);
        }, 3000);
    };

    const handleOkInspect = () => {
        setVisibleInspect(false);   
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
        } else if(e.key === "3") {
            setVisibleInspect(true);
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
              icon: <MdDeleteOutline size={18} />

            },
            {
                label: 'Inspecionar',
                key: '3',
                icon: <AiOutlineEye size={18} />
  
              },
          ]}
        />
    );

    // console.log(props.dados)
    
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
                    visible={visibleInspect}
                    title={props.dados.nome}
                    onOk={handleOkInspect}
                    onCancel={handleCancelInspect}
                    footer={null}
                >
                    <Divider orientation="left">Membros do Grupo</Divider>
                    <List
                        size="large"
                        bordered
                        // Precisa passar as pessoas especificas do grupo, porém no 'props.dados', só mostra 'id, nome e status' do grupo
                        // dataSource={}
                        renderItem={(item) => <List.Item>{item}</List.Item>}
                    />

                </Modal>


                <Modal
                    visible={visible}
                    title="Editar Grupo"
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
                            onChange={(e) => { setEditNome(e.target.value); filter(e.target.value) }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Selecione pelo menos uma pessoa.',
                                },
                            ]}
                        >
                            {console.log(editSelectedItems)}
                            {pessoas && filteredOptions && <Select
                                mode="multiple"
                                placeholder="Pessoas"
                                defaultValue={filteredOptions.map(p => { return { value: p.id, label: p.nome } })}
                                onChange={setEditSelectedItems}
                                style={{
                                    width: '100%',
                                }}
                                >
                                {pessoas?.map((item) => 
                                    (<Select.Option key={item.id} value={item.id}>
                                    {item.nome}
                                    </Select.Option>)
                                )}
                            </Select>}
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