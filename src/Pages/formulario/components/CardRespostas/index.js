import React, { useEffect, useState } from "react";
import { Container, Titulo, RespostasContainer, HeadersContainer, RespostasHeader, NotasHeader, PercentualHeader, NotaButtons, NotaContainer, Nota, PercentualRespostas, QtdRespostas, BotaoExpadir, DetalhesContainer, DetalhesTitle, ListaPessoas, NomePessoa } from "./styles";
import api from "../../../../api";

export default function CardRespostas({ index, perguntas, perguntaId }) {
    console.log(perguntaId)
  const colors = [
    "#fafa6e70",
    "#c9ee7370",
    "#9cdf7c70",
    "#72cf8570",
    "#4abd8c70",
    "#23aa8f70",
    "#00968e70",
    "#00828870",
    "#106e7c70",
    "#225b6c70",
    "#2a485870",
  ];

  const [titulo, setTitulo] = useState(perguntas[index].enunciado)
  const [qtdRespostas, setQtdRespostas] = useState(0)
  const [respostas, setRespostas] = useState([])

  const handleChange = (e) => {
    let atualizado = perguntas
    atualizado[index] = {enunciado: e.target.value}
    setTitulo(e.target.value)
    
    //edit ? setPerguntas(atualizado) :
    //setResposta(notaEscolhida)
  }

  useEffect(() => {
      const getResposta = (id) => {
        api
          .get(`/perguntas/${id}`)
          .then((res) => {
            console.log(res.data.respostas)
            setRespostas(res.data.respostas)
            setQtdRespostas(res.data.respostas.length)
            // if (res.data.perguntas.length > 0) {
            //   setPerguntas(res.data.perguntas)
            //   setEdit(false)
            // }
            //setDadosRecebidos(true)
          })
      }
      getResposta(perguntaId)
  },[])

  function qtdNotas(index) {
    let qtd = 0;
    respostas.filter(r => r.nota === index).map(filtered => {
        qtd++
    })
    return qtd;
  }

  function porcNotas(index) {
    let total = qtdRespostas;
    let qtd = 0;
    respostas.filter(r => r.nota === index).map(filtered => {
        qtd++
    })

    return total > 0 ? `${Math.round((qtd / total) * 100)}%` : "0%"
  }

  return (
    <Container>
      {/* { edit && <CloseButton onClick={() => removerPergunta(index)}>x</CloseButton>} */}
      <Titulo
        tipe="text"
        value={titulo}
        //onChange={(e) => edit && handleChange(e)}
        //disabled={!edit && true}
      />
      <RespostasContainer>

        <HeadersContainer>
            <NotasHeader>
                Notas:
            </NotasHeader>
            <RespostasHeader>
                Respostas:
            </RespostasHeader>
            <PercentualHeader>
                Percentual:
            </PercentualHeader>
        </HeadersContainer>
        <NotaButtons
                >
                {colors.map((n, index) => (
                    <NotaContainer>
                        <Nota
                        key={index}
                        //type="button"
                        value={index}
                        //onMouseEnter={() => setNota(index)}
                        //onClick={() =>  { !edit && setNotaEscolhida(index); changeRespostas(index) }}
                        style={{
                            background: n,
                        }}
                        >
                            {index}
                        </Nota>
                        <QtdRespostas>
                            {qtdNotas(index)}
                        </QtdRespostas>
                        <PercentualRespostas>
                            ({porcNotas(index)})
                        </PercentualRespostas>
                        {/* <BotaoExpadir >
                            Ver mais
                        </BotaoExpadir> */}
                    </NotaContainer>
                ))}
            </NotaButtons>
            {/* <DetalhesContainer>
                <DetalhesTitle>
                    Pessoas que deram nota 0:
                </DetalhesTitle>
                <ListaPessoas>
                    <NomePessoa>Fulana</NomePessoa>
                </ListaPessoas>
            </DetalhesContainer> */}
      </RespostasContainer>
    </Container>
  );
}
