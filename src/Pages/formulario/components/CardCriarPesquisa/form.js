import React, { useState } from "react";
import { Form, Select, Input, DatePicker, } from "antd";
const { RangePicker } = DatePicker;

function FormPesquisa({ grupos, setTit, setGrup, setDataInicio, setDataFim }) {
    const [grupoEscolhido, setGrupoEscolhido] = useState()

    const changeDate = (e) => {
       setDataInicio(e[0]._d.toISOString())
       setDataFim(e[1]._d.toISOString())
    }

    return (
        <Form>
            <Form.Item label="Titulo" required >
                <Input onChange={(e) => setTit(e.target.value)} />
            </Form.Item>

            <Form.Item required label="Grupo">
                <Select value={grupoEscolhido ? grupoEscolhido : "Grupo destino"} onChange={(e) => { setGrup(e); setGrupoEscolhido(e)}} >
                    {grupos.map((gr, index) => <Select.Option value={gr.id} key={index}> {gr.nome} </Select.Option> )}
                </Select>
            </Form.Item>

            <Form.Item label="Data de Validade">
                <RangePicker onChange={(e) => changeDate(e)} />
            </Form.Item>
        </Form>
    );
}

export default FormPesquisa;
