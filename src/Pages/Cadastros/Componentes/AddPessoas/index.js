import React, { useState } from "react";
import api from "../../../../api";
import { Button, Modal, Form, Input, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { AiOutlineUserAdd } from "react-icons/ai";
import { PlusOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { AddButton } from "./style";
import { PrimaryButton } from "../../../../Components/PrimaryButton/style.js";
import { SecondaryButton } from "../../../../Components/SecondaryButton/style.js";

const { Option } = Select;

function Cadastro(props) {
  const [form] = Form.useForm();
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
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // select
  const handleChange = (value) => {
    setTipo(value);
    if (value === 3) {
      setDisableSenha(true);
    } else {
      setDisableSenha(false);
    }
  };

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  // const [fileList, setFileList] = useState([]);
  const [foto, setFoto] = useState([]);
  //console.log(foto);

  const handleCancelUpload = () => {
    setPreviewOpen(false);
    setFoto([]);
  };

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result);

      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChangeUpload = ({ fileList: newFileList }) => {
    setFoto(newFileList);
  };

  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e?.fileList;
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Adicionar
      </div>
    </div>
  );

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [cpf, setCpf] = useState();
  const [senha, setSenha] = useState("dgasdghj55");
  const [tipo, setTipo] = useState(3);
  const [disableSenha, setDisableSenha] = useState(true);

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
    setFoto([]);
  };

  const config = {
    "Content-Type": "multipart/form-data",
  };

  function Cadastrar(e) {
    e.preventDefault();
    setLoading(true);
    const Form = new FormData();
    Form.append("nome", nome);
    Form.append("email", email);
    Form.append("cpf", cpf);
    Form.append("foto", foto.length === 0 ? "" : foto[0].originFileObj);
    Form.append("senha", senha);
    Form.append("tipo", tipo);

    api
      .post("/auth/cadastrar", Form, config)
      .then((res) => {
        console.log("Deu certo");
        props.getCadastros();
        setVisible(false);
        form.resetFields();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

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
      <PrimaryButton type="primary" onClick={showModal}>
        <AiOutlineUserAdd size={18} />
        <span>Adicionar Nova Pessoa</span>
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
          <PrimaryButton
            key="submit"
            type="primary"
            loading={loading}
            onClick={(e) => Cadastrar(e)}
          >
            Enviar
          </PrimaryButton>,
        ]}
      >
        <Form
          form={form}
          layout="vertical"
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
            initialValue={3}
            rules={[
              {
                required: true,
                message: "O tipo é obrigatório!",
              },
            ]}
          >
            <Select onChange={handleChange}>
              <Option value={3}>Usuário Comum</Option>
              <Option value={2}>Administrador</Option>
              <Option disabled={true} value={1}>
                Root
              </Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Nome"
            name="Nome"
            rules={[
              {
                required: true,
                message: "O nome é obrigatório!",
              },
            ]}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          >
            <Input type="text" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="Email"
            rules={[
              {
                required: true,
                message: "O email é obrigatório!",
              },
            ]}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item
            minLength={8}
            label="Senha"
            name="senha"
            rules={[
              {
                required: true,
                message: "A senha é obrigatória!",
              },
            ]}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          >
            <Input.Password type="password" disabled={disableSenha} />
          </Form.Item>

          <Form.Item
            label="CPF"
            name="Cpf"
            maxLength={11}
            minLength={11}
            rules={[
              {
                required: true,
                message: "O CPF é obrigatório!",
              },
              {
                pattern: /^(?:\d*)$/,
                message: "O CPF deve conter apenas números!",
              },
            ]}
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          >
            <Input maxLength={11} minLength={11} />
          </Form.Item>

          <Form.Item
            label="Foto"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <ImgCrop
              grid
              rotate
              shape="round"
              modalTitle="Editar Imagem"
              modalCancel="Cancelar"
            >
              <Upload
                listType="picture-card"
                fileList={foto}
                onPreview={handlePreview}
                onChange={handleChangeUpload}
                // beforeUpload={() => false}
                maxCount={1}
              >
                {foto.length < 1 && "+ Upload"}
              </Upload>
            </ImgCrop>
            <Modal
              open={previewOpen}
              title={previewTitle}
              footer={null}
              onCancel={handleCancelUpload}
            >
              <img
                alt="example"
                style={{
                  width: "100%",
                }}
                src={previewImage}
              />
            </Modal>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          ></Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default Cadastro;
