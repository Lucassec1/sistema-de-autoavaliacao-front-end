import React, { useState } from "react";
import { Container, Preview } from "./styles";
import { Button, Modal, Form, Select, Input } from 'antd';
import api from "../../../../api";
import FormPesquisa from "./form";

function CardCriarPesquisa(props) {
    const [visible, setVisible] = useState(false);
    const [titulo, setTitulo] = useState()
    const [grupo, setGrupo] = useState()
    const [dataInicio, setDataInicio] = useState([])
    const [dataFim, setDataFim] = useState([])

    const showModal = () => { setVisible(true); };
    const handleCancel = () => { setTimeout(() => { setVisible(false)}, 0) };
    const handleOk = () => {
        api.post('/pesquisa', {
            titulo: titulo,
            descricao: "Descrição em Branco",
            grupos: grupo,
            fk_tipo_pesquisa: props.tipoPesquisa,
            fk_usuario: 3,
            datas_inicio: dataInicio,
            datas_fim: dataFim
        })
        .then((res) => {
            setTimeout(() => { setVisible(false)}, 0);
            window.location.href = `/criarpesquisa/${res.data.id.rows[0].id}`
        })
    };

    const [grupos, setGrupos] = useState()
    const getGrupos = () => {
        api.get('/grupos')
            .then((res) => { setGrupos(res.data) })
            .catch(err => { console.log(err) })
    }

    if (!grupos) getGrupos()
    return (
        grupos &&
        <Container onClick={showModal}>
            <Preview src="" alt="Aqui vai ter uma foto" />
            <h2>{props.values.nome}</h2>

            <Modal
                visible={visible}
                title="Criar Nova Pesquisa"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Continuar
                    </Button>
                ]}
            >
                <FormPesquisa
                    grupos={grupos}
                    setTit={setTitulo}
                    setGrup={setGrupo}
                    setDataInicio={setDataInicio}
                    setDataFim={setDataFim}
                    escolhidos={grupo}
                />
            </Modal>
        </Container>
    );
}

export default CardCriarPesquisa;