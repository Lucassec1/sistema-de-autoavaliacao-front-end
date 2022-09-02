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
    useEffect(() => {
        const fetchPesquisa = async () => {
            try {
                const path = window.location.pathname;
                const response = await api.get(path);
                setPesquisa(response.data);
                setPerguntas(Pesquisa.perguntas);
                console.log(Pesquisa)
                console.log(Perguntas)
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
                
            </AllCards>
        </Container>
        </>
    )
}  