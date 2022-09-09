import React, { useState } from 'react';    
import api from '../../../api'
import { Input } from 'antd';
import CardCriarPesquisa from '../components/CardCriarPesquisa';
import { Container, Top, ContTipos, Body, ContSearch, ContPesquisas } from './styles';
import { BsArrowLeftShort } from "react-icons/bs";
import CardPesquisa from '../components/CardPesquisa'; 
const { Search } = Input;

function CriarpesquisaMenu() {
    // Buscando os tipo de pesquisa na API
    const [tiposPesquisa, setTiposPesquisa] = useState()
    const getTiposPesquisa = () => {
        api.get(`/tipoPesquisa`)
            .then(res => { setTiposPesquisa(res.data) })
            .catch(err => { alert(err) })
    }
    if (!tiposPesquisa) getTiposPesquisa()

   /* // Buscando as pesquisas
    const [pesquisas, setPesquisas] = useState()
    const [pesquisasFiltradas, setPesquisasFiltradas] = useState()
    const getPesquisas = () => {
        api
            .get("/pesquisa")
            .then((res) => { setPesquisas(res.data); setPesquisasFiltradas(res.data) })
            .catch((err) => { console.error(err) })
    }
    if (!pesquisas) getPesquisas()

    const onSearch = (e) => {
        if (e.target.value === "") { setPesquisasFiltradas(pesquisas); return }
        let results = pesquisas.filter((pesq) => pesq.titulo && pesq.titulo.toLowerCase().includes(e.target.value.toLowerCase())) 
        setPesquisasFiltradas(results)
    };*/
    
    function voltar() { window.history.back() }
//tiposPesquisa && pesquisas &&
    return (
        tiposPesquisa && 
        <Container>
            <Top>
                <BsArrowLeftShort onClick={voltar} style={{fontSize: '20px'}}/>
                <h1>Criando uma nova pesquisa</h1>
            </Top>
            
            <ContTipos>
                {tiposPesquisa.map(pesq => <CardCriarPesquisa key={pesq.id} values={pesq} tipoPesquisa={pesq.id}/> )}
            </ContTipos>

            {/*<Body>
                <ContSearch>
                    <h2>TODAS AS PESQUISAS</h2>
                    <Search placeholder="Buscar por uma pesquisa" onChange={onSearch} enterButton />
                </ContSearch>
                <ContPesquisas>
                    {pesquisasFiltradas.map((pesq, index) =>
                        <CardPesquisa key={index} pesquisa={pesq}/>
                    )}
                </ContPesquisas>
            </Body>*/}
        </Container>
    );
}

export default CriarpesquisaMenu;