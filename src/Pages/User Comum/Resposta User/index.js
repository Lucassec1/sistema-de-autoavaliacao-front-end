import React, { useEffect, useState } from "react";
import CardPergunta from "../../formulario/components/CardPergunta";
import UserHeader from "../components/userBar";
import api from "../../../api";


export default function ResUser(props) {
    const [Pesquisa, setPesquisa] = useState('');
    const [Perguntas, setPerguntas] = useState('');
    useEffect(() => {
        const fetchPesquisa = async () => {
            try {
                const response = await api.get('/pesquisa/' + props.id_pesquisa);
                setPesquisa(response.data);
                setPerguntas(Pesquisa.perguntas);
            } catch (error) {
                console.log(error);
                if (error.response.status === 401) {
                    window.location.href = '/'
                }
            }
        };
        fetchPesquisa();
    }, []);

    return (
        <>
            <UserHeader/>
            {Perguntas?.map(e => {
                
                
            })}
            <div>Larissa a+ linda</div>
        </>
    )
}  