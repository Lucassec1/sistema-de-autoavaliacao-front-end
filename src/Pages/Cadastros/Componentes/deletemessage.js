import React from 'react';
import api from '../../../api';

import { message, Popconfirm, Button } from 'antd';
import { MdDeleteOutline } from "react-icons/md";

export default function Dialog(props) {
    const deleteUser = () => {
        api
            .delete(props.router)
            .then(() => {
                props.update()
            })
            .catch(err => {
                console.log(err)
            })
    }

    if (props.option === 1) {
        console.log(props.router)
        return deleteUser(props.router);
    } else {
        const Confirmar = (e) => {
            console.log(e);
            message.success(props.mensagem, 1.5);
            deleteUser(props.record)
        };
    
        const Cancelar = (e) => {
            console.log(e);
        };
    
        return (
            <Popconfirm
                title={props.title}
                onConfirm={Confirmar}
                onCancel={Cancelar}
                okText="Sim"
                cancelText="Não"
            >
                <Button icon={<MdDeleteOutline />} style={{ border: 'none' }} />
            </Popconfirm>
        )
    }
}