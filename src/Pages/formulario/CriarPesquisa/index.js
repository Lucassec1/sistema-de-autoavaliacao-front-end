import React from 'react';
import CabecalhoPesquisa from '../components/CabecalhoPesquisa';
import { AiOutlinePlus } from "react-icons/ai";
import CardPergunta from '../components/CardPergunta';
import { Container, Pagina, BodyPesquisa, AdicionarPergunta } from './styles';

function Criarpesquisa() {
  return (
    <Container>
      <Pagina>
        <CabecalhoPesquisa/>

        <BodyPesquisa>
          <CardPergunta />
          <AdicionarPergunta><AiOutlinePlus/></AdicionarPergunta>
        </BodyPesquisa>

      </Pagina>
    </Container>
  );
}

export default Criarpesquisa;