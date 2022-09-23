import React, { useEffect, useState } from 'react';
import CabecalhoPesquisa from '../components/CabecalhoPesquisa';
import { AiOutlinePlus } from "react-icons/ai";
import CardPergunta from '../components/CardPergunta';
import { BsArrowLeftShort } from "react-icons/bs";
import { Container, Pagina, BodyPesquisa, AdicionarPergunta, ListaPerguntas, BtnConcluir, FixedBar } from './styles';
import api from '../../../api'
import CardRespostas from '../components/CardRespostas';

function Criarpesquisa() {
  const id = window.location.pathname.substring(15,)
  const [perguntas, setPerguntas] = useState([{enunciado: "Primeira Pergunta"}])
  const [dadosRecebidos, setDadosRecebidos] = useState(false)
  const idPerguntas = []
  const [edit, setEdit] = useState(true)
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
        console.log(res)
        setTitulo({titulo: res.data.titulo, descricao: res.data.descricao})
        if (res.data.perguntas.length > 0) {
          setPerguntas(res.data.perguntas)
          setEdit(false)
        }
        setDadosRecebidos(true)
      })
  }

  
  if (!dadosRecebidos){
    getDados()
  } 

  perguntas.map(p => (
    idPerguntas.push(p.id)
  ))
  console.log(perguntas)

  const getResposta = (perguntaId) => {
    api
      .get(`/pesquisa/${perguntaId}`)
      .then((res) => {
        console.log(res.data)
        // if (res.data.perguntas.length > 0) {
        //   setPerguntas(res.data.perguntas)
        //   setEdit(false)
        // }
        setDadosRecebidos(true)
      })
  }

  const PostPerguntas = (e) => {
    e.preventDefault()
    api
      .post(`/perguntas/pesquisa/${id}`, { perguntas: perguntas })
      .then((res) => console.log(res))
      //window.location.href = `/menupesquisa`
  }

  function voltar() { window.history.back(); }
  
  return (
    dadosRecebidos &&
    <Container>
      <FixedBar>
        <div style={{display: "flex", alignItems: "center"}}>
          <BsArrowLeftShort size="1.5rem" onClick={voltar}/>
          <span>{edit ? "Criando Nova Pesquisa" : "Visualização da pesquisa"}</span>
        </div>
        {edit
        ? <BtnConcluir onClick={(e) => { PostPerguntas(e) }}>Concluir Criação da Pesquisa</BtnConcluir>
        : <BtnConcluir>Compartilhar</BtnConcluir>
      }
      </FixedBar>

      <Pagina>
        <CabecalhoPesquisa titulo={titulo} setTitulo={setTitulo}/>

        <BodyPesquisa>
          <ListaPerguntas>
            {perguntas.map((_, index) => 
              {return edit ? 
                 <CardPergunta 
                  key={index}
                  perguntas={perguntas}
                  setPerguntas={setPerguntas}
                  index={index}
                  removerPergunta={removerPergunta}
                  edit={edit}
                  /> 
                 :
                <CardRespostas 
                perguntaId={_.id}
                key={index}
                perguntas={perguntas}
                index={index} />
              }
            )}
          </ListaPerguntas>

          {edit &&
          <AdicionarPergunta onClick={() => adicionarPergunta()}>
            <AiOutlinePlus/>
          </AdicionarPergunta>
          }         

        </BodyPesquisa>
      </Pagina>
    </Container>
  );
}

export default Criarpesquisa;