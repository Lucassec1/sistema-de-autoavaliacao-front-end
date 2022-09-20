import React, { useState } from 'react';
import api from '../../../api';

import { PrimaryButton } from '../../../Components/PrimaryButton/style';
import { SecondaryButton } from "../../../Components/SecondaryButton/style.js";
import { MdOutlineEdit } from "react-icons/md";
import ImgCrop from 'antd-img-crop';

import { 
    Button, 
    Modal, 
    Form, 
    Input, 
    Upload, 
    Select 
} from 'antd';

export default function EditarCadastro(props) {
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);

    function StringType(tipo) {
        if (tipo === "Usuário comum") {
          return "3"
        } else if (tipo === "Administrador") {
          return "2"
        } else if (tipo == "Root") {
          return "1";
        }
    }
    
    const [editarNome, setEditarNome] = useState(props.record.nome)
    const [editarEmail, setEditarEmail] = useState(props.record.email)
    const [editarCpf, setEditarCpf] = useState(props.record.cpf)
    const [editarFoto, setEditarFoto] = useState([
        {
          uid: '1',
          name: 'foto.png',
          status: 'done',
          url: props.record.foto,
          thumbUrl: props.record.foto,
        },
      ])
    const [editarTipo, setEditarTipo] = useState(StringType(props.record.tipo))
    
    const { Option } = Select;
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
    
    const handleChange = (value) => {
        console.log(value);
        
        setEditarTipo(value);
    };

    const config = {
        'Content-Type': 'multipart/form-data',
    }
    
    function Update(e) {
        e.preventDefault()
        setLoading(true)
        const Form = new FormData();
        Form.append('nome', editarNome)
        Form.append('email', editarEmail)
        Form.append('cpf', editarCpf)
        editarFoto &&  Form.append('foto', editarFoto[0]?.originFileObj)

        api
            .put(`/usuarios/${props.record.key}`, Form, config)       
            .then(res => {
                setLoading(false)
                
                setVisible(false)
                props.update()
                console.log('Deu certo!')
            })
            .catch(err => {
                setLoading(false)
                console.log('Bugou')
            })
    }

    const handleCancel = () => {
        setVisible(false);
    };

    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => resolve(reader.result);

            reader.onerror = (error) => reject(error);
    });

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const handleCancelUpload = () => setPreviewOpen(false);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const handleChangeUpload = ({ fileList: newFileList }) => { 
        setEditarFoto(newFileList) 
    };

    const normFile = (e) => {
        setEditarFoto(e.file.originFileObj);
        console.log(e)
    };

    const onPreview = async (file) => {
        let src = file.url;
    
        if (!src) {
          src = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
    
            reader.onload = () => resolve(reader.result);
          });
        }
    
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
      };

    return (
        <>
            <>
                <Button icon={<MdOutlineEdit />} onClick={showModal} style={{ border: 'none' }} />
            </>

            <Modal
                visible={visible}
                title="Editar Cadastro"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <SecondaryButton key="back" onClick={handleCancel}>
                        Cancelar
                    </SecondaryButton>,
                    <PrimaryButton key="submit" type="primary" loading={loading} onClick={(e) => Update(e)}>
                        Salvar
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
                    <Form.Item 
                        label="Tipo"
                        name="Tipo"
                        initialValue={editarTipo}
                        rules={[
                            {
                                required: true,
                                message: 'O Tipo é obrigatório!',
                            },
                        ]}>

                        <Select
                        disabled
                            onChange={handleChange}
                        >
                            <Option  value={"3"}>Usuário Comum</Option>
                            <Option  value={"2"}>Administrador</Option>
                            <Option  value={"1"}>Root</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Nome"
                        name="Nome"
                        rules={[
                            {
                                required: true,
                                message: 'O Nome é obrigatório!',
                            },
                        ]}
                        initialValue={editarNome}
                        onChange={e => setEditarNome(e.target.value)}
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
                        initialValue={editarEmail}
                        onChange={e => setEditarEmail(e.target.value)}
                    >
                        <Input type='email' />
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
                        initialValue={editarCpf}
                        onChange={e => setEditarCpf(e.target.value)}
                    >
                        <Input maxLength={11} minLength={11} />
                    </Form.Item>

                    <Form.Item
                        name="foto"
                        label="Foto"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                    >
                        <ImgCrop grid rotate shape="round" modalTitle="Editar Imagem" modalCancel="Cancelar">
                            <Upload name="fotoEditar" listType="picture-card" 
                            fileList={editarFoto}
                            onPreview={onPreview}
                            onChange={handleChangeUpload}
                            /*defaultFileList={[...fileList]} */maxCount={1}>
                                {editarFoto.length < 1 && '+ Upload'}
                            </Upload>
                        </ImgCrop>
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
    )
}