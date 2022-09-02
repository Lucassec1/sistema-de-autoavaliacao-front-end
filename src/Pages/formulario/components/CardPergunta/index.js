import React, { useState } from 'react';
import { Container, Titulo, NotaButtons, Nota } from './styles';

function CardPergunta({ pergunta, index, perguntas, setPerguntas, edit }) {
    const [titulo, setTitulo] = useState(pergunta.titulo)

    const [notaEscolhida, setNotaEscolhida] = useState()
    const [nota, setNota] = useState(-1)  // State da nota que o mouse está em cima

    const colors = [ '#fafa6e70', '#c9ee7370', '#9cdf7c70', '#72cf8570', '#4abd8c70', '#23aa8f70', '#00968e70', '#00828870', '#106e7c70', '#225b6c70', '#2a485870']

    const checkOpacity = (num) => {
        if (notaEscolhida) {
        if (num > notaEscolhida) return 0.3 
        return 1
    }
    if (num > nota) return 0.3
    return 1
  }

  const handleChange = (e) => {
    let atualizado = perguntas
    atualizado[index] = {titulo: e.target.value}
    setTitulo(e.target.value)
    setPerguntas(atualizado)
  }

  return (
    <Container>
        <Titulo
          tipe="text"
          value={titulo}
          onChange={(e) => edit && handleChange(e)}
          disabled={!edit && true}
        />
        <NotaButtons
            onMouseLeave={() => setNota(-1)}>
            {colors.map((n, index) => (
                <Nota
                  key={index}
                  type="button"
                  value={index}
                  onMouseEnter={() => setNota(index)}
                  onClick={() => setNotaEscolhida(index)}
                  style={{
                    opacity: edit ? '0.3' : checkOpacity(index),
                    background: n,
                    border: edit ? '0' : notaEscolhida == index ? "1px solid #555" : "1px solid transparent"
                  }}
                />
              ))}
              
        </NotaButtons>
    </Container>
  );
}

export default CardPergunta;