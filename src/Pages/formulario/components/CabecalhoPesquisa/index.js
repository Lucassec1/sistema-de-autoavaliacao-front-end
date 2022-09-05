import React from 'react';
import { Container, Titulo, Descricao } from './styles';

function CabecalhoPesquisa({ titulo, setTitulo }) {
    const updateCabecalho = (e) => {
        setTitulo(valorAntigo => {
            return {
                ...valorAntigo,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <Container>
            <Titulo
              name="titulo"
              type="text"
              value={titulo.titulo}
              onChange={(e) => updateCabecalho(e)}
            />
            <Descricao
              name="descricao"
              type="text"
              value={titulo.descricao}
              onChange={(e) => updateCabecalho(e)}
            />
        </Container>
    )
}

export default CabecalhoPesquisa;