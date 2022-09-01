import React, { useState } from 'react';
import { Container, Titulo, Descricao } from './styles';
import CardPergunta from '../CardPergunta';

function CabecalhoPesquisa() {
    const [cabecalhoPesquisa, setCabecalhoPesquisa] = useState({
        titulo: "Nova Pesquisa em Branco",
        descricao: "Descrição"
    })
    
    const updateCabecalho = (e) => {
        setCabecalhoPesquisa(valorAntigo => {
            return {
                ...valorAntigo,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <Container>
            <CardPergunta edit={false} pergunta={{titulo: "tu é?"}}/>
            <Titulo
              name="titulo"
              type="text"
              value={cabecalhoPesquisa.titulo}
              onChange={(e) => updateCabecalho(e)}
            />
            <Descricao
              name="descricao"
              type="text"
              value={cabecalhoPesquisa.descricao}
              onChange={(e) => updateCabecalho(e)}
            />
        </Container>
    )
}

export default CabecalhoPesquisa;