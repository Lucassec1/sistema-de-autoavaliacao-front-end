import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../../../api'
import CardCriarPesquisa from './CardCriarPesquisa';
import { Container, Top, ContTipos } from './styles';
import { BsArrowLeftShort } from "react-icons/bs";

function CriarpesquisaMenu() {
    const navigate = useNavigate();

    const [tiposPesquisa, setTiposPesquisa] = useState()
    const getTiposPesquisa = () => {
        api.get(`/tipoPesquisa`)
            .then(res => { setTiposPesquisa(res.data) })
            .catch(err => { alert(err) })
    }
    
    if (!tiposPesquisa) getTiposPesquisa()
    
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
        tiposPesquisa &&
        
        <Container>
            <Top>
                <Setavoltar/>
                <h1>Criando uma nova pesquisa</h1>
            </Top>
            
            <ContTipos>
                {tiposPesquisa.map(pesq => 
                    <CardCriarPesquisa key={pesq.id} values={pesq} tipoPesquisa={pesq.id}/>
                )}
                
            </ContTipos>
        </Container>
    );
}

export default CriarpesquisaMenu;