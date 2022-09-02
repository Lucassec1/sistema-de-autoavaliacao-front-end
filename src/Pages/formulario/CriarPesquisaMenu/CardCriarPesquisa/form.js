import React, { useState } from "react";
import { Button, Modal, Form, Select, Input } from "antd";

// import { Container } from './styles';

function FormPesquisa({ grupos, setRespostas, setTit, setGrup }) {
    const [grupoEscolhido, setGrupoEscolhido] = useState()

    return (
        <Form>
            <Form.Item>
                <Input onChange={(e) => setTit(e.target.value)}/>
            </Form.Item>

            {/* Select Para Escolher o grupo */}
            <Form.Item>
                <Select value={grupoEscolhido ? grupoEscolhido : "Grupo destino"} onChange={(e) => { setGrup(e); setGrupoEscolhido(e)}} >
                    {grupos.map((gr, index) => <Select.Option value={gr.id} key={index}> {gr.nome} </Select.Option> )}
                </Select>
            </Form.Item>
        </Form>
    );
}

export default FormPesquisa;
