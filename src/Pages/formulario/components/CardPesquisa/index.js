import React from 'react';

import { Container, Left, Body } from './styles';

function CardPesquisa({ pesquisa }) {
  return (
    <Container>
        <Left></Left>
        <Body>
            <h3>{pesquisa.titulo}</h3>
            <p>{pesquisa.descricao}</p>
        </Body>
    </Container>
  );
}

export default CardPesquisa;