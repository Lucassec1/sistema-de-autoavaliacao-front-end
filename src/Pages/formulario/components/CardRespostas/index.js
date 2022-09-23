import React, { useEffect, useState } from "react";
import { Container, Titulo, RespostasContainer, HeadersContainer, RespostasHeader, NotasHeader, PercentualHeader, NotaButtons, NotaContainer, Nota, PercentualRespostas, QtdRespostas, GraficoContainer, GráficoTitle, GráficoSubtitle } from "./styles";
import { BsEmojiFrown, BsEmojiNeutral, BsEmojiSmile } from "react-icons/bs";
import api from "../../../../api";
import GraficoPizza from "../GraficoPizza";

export default function CardRespostas({ index, perguntas, perguntaId }) {
  console.log(perguntaId)
  const colors = [
    "var(--Error)",
    "var(--Error)",
    "var(--Error)",
    "var(--Error)",
    "var(--Error)",
    "var(--Error)",
    "var(--Error)",
    "var(--Warning)",
    "var(--Warning)",
    "var(--Success)",
    "var(--Success)",
  ];

  const [titulo, setTitulo] = useState(perguntas[index].enunciado)
  const [qtdRespostas, setQtdRespostas] = useState(0)
  const [respostas, setRespostas] = useState([])

  const handleChange = (e) => {
    let atualizado = perguntas
    atualizado[index] = { enunciado: e.target.value }
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
        .catch((err) => {
          console.log(err)
        })
        
    }
    getResposta(perguntaId)
  }, [])

  //console.log(respostas)

  let promotores;
  let detratores;
  let neutros;

  function qtdNotas(index) {
    console.log(index)
    if (index >= 0 && index < 7) {
      return <BsEmojiFrown color="var(--Error)" size="1.3rem" />
    } else if (index === 7 || index === 8) {
      return <BsEmojiNeutral color="var(--Warning)" size="1.3rem" />
    } else if (index > 8) {
      return <BsEmojiSmile color="var(--Success)" size="1.3rem" />
    }
  }

  function porcNotas(index) {
    let total = qtdRespostas;
    let qtd = 0;
    respostas.filter(r => r.nota === index).map(filtered => {
      if (filtered >= 0 && filtered < 7) {
        detratores++;
      } else if (filtered === 7 || filtered === 8) {
        neutros++;
      } else if (filtered > 8) {
        promotores++;
      }
    })

    return total > 0 ? `${Math.round((qtd / total) * 100)}%` : "0%"
  }

  function calcNps() {
    return qtdRespostas ? `${(promotores / qtdRespostas) - (detratores / qtdRespostas)}` : "0"
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

        {/* <HeadersContainer>
            <NotasHeader>
                Notas:
            </NotasHeader>
            <RespostasHeader>
                Respostas:
            </RespostasHeader>
            <PercentualHeader>
                Percentual:
            </PercentualHeader>
        </HeadersContainer> */}
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
        <GraficoContainer>
          <GráficoTitle>
            NPS
          </GráficoTitle>
          <GraficoPizza />
          <div>
            <span>{calcNps()}</span>
          </div>
          <GráficoSubtitle>
            Zona de Classificação
          </GráficoSubtitle>
        </GraficoContainer>
      </RespostasContainer>
    </Container>
  );
}
