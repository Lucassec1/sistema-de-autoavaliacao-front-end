import React from 'react';

import { Container, Left, Body, CardTitle, CardDescription } from './styles';

function CardPesquisa({ pesquisa }) {
  return (
    <Container
      onClick={() => window.location.pathname = `/criarpesquisa/${pesquisa.id}`}>
        {/* <Left></Left> */}
        <Body>
            <CardTitle>{pesquisa.titulo}</CardTitle>
            <CardDescription>{pesquisa.descricao}</CardDescription>
        </Body>
    </Container>
  );
}

export default CardPesquisa;