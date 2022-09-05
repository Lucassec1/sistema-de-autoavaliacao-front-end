import React, { useEffect, useState } from "react";
import CardPergunta from "../../formulario/components/CardPergunta";
import UserHeader from "../components/userBar";
import api from "../../../api";

import {
    AllCards,
    Container,
    Button,
} from './styles'


export default function ResUser(props) {

    function postRespostas(Respostas) {
        const respostas = async () => {
            try {
                api.post('/resposta', {
                    fk_usuario: localStorage.getItem('id').substring(1, (localStorage.getItem('id')).length - 1),
                    Respostas
                })
            } catch (error) {
                console.log(error);
                if (error.response.status === 401) {
                    window.location.href = '/'
                }
            }
        };
        respostas();

    }


    const [Pesquisa, setPesquisa] = useState('');
    const [Perguntas, setPerguntas] = useState('');
    const path = window.location.pathname;
    // const [Respostas, setRespostas] = useState('');
    // function dadosResposta(id, nota){
    //     Respostas.push({id, nota})

    // }

    const [Respostas, setRespostas] = useState()
    useEffect(() => {
        const fetchPesquisa = async () => {
            try {
                const response = await api.get(path);
                setPesquisa(response.data);
                setPerguntas(response.data.perguntas)
                setRespostas(response.data.perguntas);
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
                <UserHeader />
                <AllCards>
                    {Perguntas?.length > 0 ? (
                        Perguntas?.map((p, index) => (
                            <CardPergunta key={p.id} edit={false} pergunta={p} setResposta={setRespostas} index={index} respostas={Respostas} />
                        ))
                    ) : (
                        <div>
                            Não há perguntas :()
                        </div>
                    )}

                    <Button onClick={(e) => postRespostas(Respostas)} >Enviar</Button>
                </AllCards>
            </Container>
        </>
    )
}  