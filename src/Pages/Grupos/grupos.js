import React, { useState } from 'react';
import Card from './components/card'
import { PrimaryButton } from "../../Components/PrimaryButton/style";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Button, Modal, Form, Input, Upload } from 'antd';
import { SecondaryButton } from '../../Components/SecondaryButton/style';
import { Select } from 'antd';
import { useParams } from 'react-router-dom'

import api from '../../api';
import { useEffect } from 'react';
function Grupo() {

    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
    const [selectedItems, setSelectedItems] = useState([]);
    const [pessoas, setPessoas] = useState([]);
    
    useEffect(() => {
        api.get("/usuarios")
        .then((resp) => {
            setPessoas(resp.data)
            
        })
    }, []);
    // const { nome } = useParams()
    
    // const peganome = parseInt(nome);
    // const getnome = pessoas.filter((nome) => {return nome});

    // console.log(getnome);
    // const filteredOptions = getnome.filter((o) => !selectedItems.includes(o));

    const [filtro, setFiltro] = useState()

    pessoas.forEach(p => objFilter[p.nome])
    setFiltro(objFilter)
    
    const filteredOptions = teste.filter((o) => !selectedItems.includes(o));


    const showModal = () => {
        setVisible(true);
    };

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

    const [grupo, setGrupo] = useState()
    const [status, setStatus] = useState()
    function Cadastrar(e) {
        e.preventDefault()
        setLoading(true)

        api.post('/auth/cadastrar')
            .then(res => {
                console.log('Deu certo')
                setVisible(false)
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
                        <PrimaryButton key="submit" type="primary" loading={loading} onClick={(e) => (e)}>
                            Enviar
                        </PrimaryButton>
                    ]}
                >
                     <Select
                        mode="multiple"
                        placeholder="Inserted are removed"
                        value={selectedItems}
                        onChange={setSelectedItems}
                        style={{
                            width: '100%',
                        }}
                        >
                        {filteredOptions.map((item) => (
                            <Select.Option key={item} value={item}>
                            {item}
                            </Select.Option>
                        ))}
                    </Select>
                </Modal>
                <Card></Card>
            </div>

        </>
    )
}
export default Grupo;