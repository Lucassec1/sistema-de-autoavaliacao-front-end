import React from 'react';
import { Container, Preview } from './styles';

function CardCriarPesquisa(props) {
  return (
        <Container href={props.href}>
            <Preview src="" alt="Aqui vai ter uma foto"/>
            <h2>{props.values.nome}</h2>
        </Container>
    );
}

export default CardCriarPesquisa;