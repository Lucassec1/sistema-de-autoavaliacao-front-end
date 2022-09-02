import React, { useState } from 'react';
import CabecalhoPesquisa from '../components/CabecalhoPesquisa';
import { AiOutlinePlus } from "react-icons/ai";
import CardPergunta from '../components/CardPergunta';
import { BsArrowLeftShort } from "react-icons/bs";

import { Container, Pagina, BodyPesquisa, AdicionarPergunta, ListaPerguntas, BtnConcluir, FixedBar } from './styles';

function Criarpesquisa() {
  const [perguntas, setPerguntas] = useState([{enunciado: "Primeira Pergunta"}])

  const adicionarPergunta = () => {
    setPerguntas(valoresAntigos => {
      return ([
        ...valoresAntigos,
        {enunciado: "Nova Pergunta"}
      ])
    })
  }

  function Setavoltar(){
    function voltar(){  window.history.back(); }
    return <BsArrowLeftShort onClick={voltar} style={{fontSize: '20px'}}/>
  } 

  console.log(perguntas)
  
  return (
    <Container>
      <FixedBar>
        <div style={{display: "flex", alignItems: "center"}}>
          <Setavoltar/>
          <span>Criando Nova Pesquisa</span>
        </div>
        <BtnConcluir>Concluir Criação da Pesquisa</BtnConcluir>
      </FixedBar>
      <Pagina>

        <CabecalhoPesquisa/>

        <BodyPesquisa>
          <ListaPerguntas>
            {perguntas.map((perg, index) => <CardPergunta pergunta={perg} perguntas={perguntas} setPerguntas={setPerguntas} index={index} edit={true}/> )}
          </ListaPerguntas>

          <AdicionarPergunta onClick={() => adicionarPergunta()}>
            <AiOutlinePlus/>
          </AdicionarPergunta>

          </BodyPesquisa>
      </Pagina>
    </Container>
  );
}

export default Criarpesquisa;