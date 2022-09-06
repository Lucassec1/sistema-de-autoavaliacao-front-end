import React, { useEffect, useState } from 'react';
import CabecalhoPesquisa from '../components/CabecalhoPesquisa';
import { AiOutlinePlus } from "react-icons/ai";
import CardPergunta from '../components/CardPergunta';
import { BsArrowLeftShort } from "react-icons/bs";
import { Container, Pagina, BodyPesquisa, AdicionarPergunta, ListaPerguntas, BtnConcluir, FixedBar } from './styles';
import api from '../../../api'

function Criarpesquisa() {
  const id = window.location.pathname.substring(15,)
  const [perguntas, setPerguntas] = useState([{enunciado: "Primeira Pergunta"}])
  const [dadosRecebidos, setDadosRecebidos] = useState(false)
  const [titulo, setTitulo] = useState({ 
    titulo: "",
    descricao: "Descrição"
  })

  const adicionarPergunta = () => {
    setPerguntas(valoresAntigos => {
      return ([
        ...valoresAntigos,
        {enunciado: "Nova Pergunta"}
      ])
    })
  }

  const removerPergunta = (index) => {
    setPerguntas(valoresAntigos => {
      return (valoresAntigos.filter((perg, ind) => ind !== index))
    })
  }

  const getDados = () => {
    api
      .get(`/pesquisa/${id}`)
      .then((res) => {
        setTitulo({titulo: res.data.titulo, descricao: res.data.descricao})
        setDadosRecebidos(true)
      })
  }

  if (!dadosRecebidos){
    getDados()
  } 

  const PostPerguntas = (e) => {
    e.preventDefault()
    api
      .post(`/perguntas/pesquisa/${id}`, { perguntas: perguntas })
      .then((res) => console.log(res))
  }

  function Setavoltar(){
    function voltar(){  window.history.back(); }
    return <BsArrowLeftShort onClick={voltar} style={{fontSize: '20px'}}/>
  } 
  
  return (
    dadosRecebidos &&
    <Container>
      <FixedBar>
        <div style={{display: "flex", alignItems: "center"}}>
          <Setavoltar/>
          <span>Criando Nova Pesquisa</span>
        </div>
        <BtnConcluir onClick={(e) => { PostPerguntas(e) }}>Concluir Criação da Pesquisa</BtnConcluir>
      </FixedBar>

      <Pagina>
        <CabecalhoPesquisa titulo={titulo} setTitulo={setTitulo}/>

        <BodyPesquisa>
          <ListaPerguntas>
            {perguntas.map((_, index) => 
              <CardPergunta 
                key={index}
                perguntas={perguntas}
                setPerguntas={setPerguntas}
                index={index}
                removerPergunta={removerPergunta}
                edit={true}/> )}
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