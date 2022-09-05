import React, { useEffect, useState } from 'react';
import CabecalhoPesquisa from '../components/CabecalhoPesquisa';
import { AiOutlinePlus } from "react-icons/ai";
import CardPergunta from '../components/CardPergunta';
import { BsArrowLeftShort } from "react-icons/bs";
import { Container, Pagina, BodyPesquisa, AdicionarPergunta, ListaPerguntas, BtnConcluir, FixedBar } from './styles';
import api from '../../../api'

function Criarpesquisa() {
  const id = window.location.pathname.substring(15,)
  console.log(id)
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

  function Setavoltar(){
    function voltar(){  window.history.back(); }
    return <BsArrowLeftShort onClick={voltar} style={{fontSize: '20px'}}/>
  } 

  const postPesquisa = (e) => {
    e.PreventDefault()

    api.post('/pesquisa', {
      id: localStorage.getItem['id'],
      titulo, perguntas, 
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => alert(err))
  }
  
  return (
    dadosRecebidos &&
    <Container>
      <FixedBar>
        <div style={{display: "flex", alignItems: "center"}}>
          <Setavoltar/>
          <span>Criando Nova Pesquisa</span>
        </div>
        <BtnConcluir onClick={(e) => { postPesquisa(e) }}>Concluir Criação da Pesquisa</BtnConcluir>
      </FixedBar>

      <Pagina>
        <CabecalhoPesquisa titulo={titulo} setTitulo={setTitulo}/>

        <BodyPesquisa>
          <ListaPerguntas>
            {perguntas.map((perg, index) => <CardPergunta key={index} pergunta={perg} perguntas={perguntas} setPerguntas={setPerguntas} index={index} edit={true}/> )}
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