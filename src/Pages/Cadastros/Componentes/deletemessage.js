import React from 'react';
import api from '../../../api';

import { message, Popconfirm, Button } from 'antd';
import { MdDeleteOutline } from "react-icons/md";

export default function Dialog(props) {
    console.log(props)
    const deleteUser = (user) => {
        api
          .delete(`/usuarios/${props.record.key}`)
          .then(() => {
            console.log("deletado")
            props.update()
          })
          .catth(err => {
            console.log(err)
          })
      }

    const Confirmar = (e) => {
        console.log(e);
        message.success('Usuário deletado com sucesso', 1.5);
        deleteUser(props.record)
    };
    
    const Cancelar = (e) => {
        console.log(e);
    };

    return (
        <Popconfirm
            title="Você deseja mesmo apagar esse usuário?"
            onConfirm={Confirmar}
            onCancel={Cancelar}
            okText="Sim"
            cancelText="Não"
        >
            <Button icon={<MdDeleteOutline/>} style={{border: 'none'}}/>
        </Popconfirm>
    )
}