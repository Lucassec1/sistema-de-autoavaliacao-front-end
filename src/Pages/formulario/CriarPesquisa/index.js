import React from 'react';
import CabecalhoPesquisa from '../components/CabecalhoPesquisa';
import { AiOutlinePlus } from "react-icons/ai";
import CardPergunta from '../components/CardPergunta';
import { Container, Pagina, BodyPesquisa, AdicionarPergunta } from './styles';
import { BsArrowLeftShort } from "react-icons/bs";

function Criarpesquisa() {
  function Setavoltar(){
    function voltar(){
        window.history.back();
    }
    return(
        <>
            <BsArrowLeftShort onClick={voltar} style={{fontSize: '20px'}}/>
        </>
    )
} 

  return (
    <Container>
      <Setavoltar/>
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