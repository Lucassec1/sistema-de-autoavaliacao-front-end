import React, { useState, useEffect } from 'react';
import api from '../../../api';

import { Button, Modal } from 'antd';

function Inspecionar () {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pessoas, setPessoas] =useState()
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        api.get("/usuarios")
        .then(resp => {
            setPessoas(resp.data) 
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    return (
        <>
        <Button type="primary" onClick={showModal}>
            Open Modal
        </Button>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

            <ul>
                {pessoas.map(pessoa => (
                    <li key="pessoa.id">
                        {pessoa.nome}
                    </li>
                ))}
            </ul>
        </Modal>
        </>
    );
};

export default Inspecionar;