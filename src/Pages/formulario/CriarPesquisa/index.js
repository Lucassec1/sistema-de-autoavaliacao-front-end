import React, { useState } from 'react';
import CabecalhoPesquisa from '../components/CabecalhoPesquisa';
import CardPergunta from '../components/CardPergunta';
import { Container, Pagina, BodyPesquisa } from './styles';

function Criarpesquisa() {
  return (
    <Container>
      <Pagina>
        <CabecalhoPesquisa/>

        <BodyPesquisa>
          <CardPergunta/>
        </BodyPesquisa>

      </Pagina>
    </Container>
  );
}

export default Criarpesquisa;