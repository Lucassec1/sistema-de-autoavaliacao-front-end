import React, { useEffect, useState } from "react";
import CardPergunta from "../../formulario/components/CardPergunta";
import UserHeader from "../components/userBar";
import api from "../../../api";

import { 
    AllCards,
    Container
} from './styles'


export default function ResUser(props) {
    const [Pesquisa, setPesquisa] = useState('');
    const [Perguntas, setPerguntas] = useState('');
    const path = window.location.pathname;
    useEffect(() => {
        const fetchPesquisa = async () => {
            try {
                const response = await api.get(path);
                console.log(path)
                setPesquisa(response.data);
                setPerguntas(response.data.perguntas);
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
        <Container>
            <UserHeader/>
            <AllCards>
            {Perguntas?.length > 0 ? (
                        Perguntas?.map((p) => (
                            <CardPergunta key={p.id} edit={false} pergunta={p} />
                        ))
                    ) : (
                        <div>
                            Não há pesquisas :()
                        </div>
                    )}
            </AllCards>
        </Container>
        </>
    )
}  