import React, { useState } from "react";
import { Form, Select, Input, DatePicker, Typography} from "antd";
const { RangePicker } = DatePicker;
const { Title } = Typography;

function FormPesquisa({ grupos, setTit, setGrup, setDataInicio, setDataFim, escolhidos }) {
    const [grupoEscolhido, setGrupoEscolhido] = useState()

    const changeDate = (e, index) => {
        setDataInicio(valorAntigo => {
            valorAntigo[index] = e[0]._d.toISOString()
            return valorAntigo
        })
        setDataFim(valorAntigo => {
            valorAntigo[index] = e[1]._d.toISOString()
            return valorAntigo
        })
    }

    return (
        <>
            <Form labelCol={{ span: 4 }}>
                <Form.Item label="Titulo" required >
                    <Input placeholder="Nome da Pesquisa" onChange={(e) => setTit(e.target.value)} />
                </Form.Item>

                <Form.Item required label="Grupos">
                    <Select
                        mode="multiple"
                        value={grupoEscolhido}
                        placeholder="Grupo de Pessoas que receberão a pesquisa"
                        onChange={(e) => { setGrup(e); setGrupoEscolhido(e)}} >
                            {grupos.map((gr, index) => <Select.Option value={gr.id} key={index}> {gr.nome} </Select.Option>
                        )}
                    </Select>
                </Form.Item>
            </Form>

            <Form labelCol={{ span: 5 }}  wrapperCol={{ span: 26 }}>
            {escolhidos && escolhidos.length > 0 &&
                <>
                    <hr/>
                    <Title level={5}>Definindo as datas de validade da pesquisa para cada grupo</Title>

                    {grupos.filter(gr => escolhidos.includes(gr.id)).map((gr, index) => 
                    <Form.Item key={gr.id} label={`${gr.nome}`}>
                        <RangePicker onChange={(e) => changeDate(e, index)} />
                    </Form.Item>)
                    }
                </>
            }
            </Form>
        </>
    );
}

export default FormPesquisa;
