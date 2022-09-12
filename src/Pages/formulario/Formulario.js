import React, { useEffect, useState, } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Navbargeral from "./navbar"
import { Input } from 'antd';
import api from '../../api'
import CardPesquisa from '../formulario/components/CardPesquisa'; 
import { Container, Top, ContTipos, Body, ContSearch, ContPesquisas } from '../formulario/CriarPesquisaMenu/styles';

function teste() {
    alert('trabalhando nisso')
}
const { Search } = Input;

function Formulario() {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    // Buscando as pesquisas
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
    };
    console.log(pesquisas)
    return (
        pesquisas &&
        <>
            <div>
                <div id='teste'>
                    <Navbargeral/>
                </div>
                <div className='seletor'>
                    <Body>
                        <ContSearch>
                            <h2>TODAS AS PESQUISAS</h2>
                            <Search 
                                style={{width: '370px'}}
                                placeholder="Buscar por uma pesquisa" onChange={onSearch} enterButton />
                        </ContSearch>
                        <ContPesquisas>
                            {pesquisasFiltradas.map((pesq, index) =>
                                <CardPesquisa key={index} pesquisa={pesq}/>
                            )}
                        </ContPesquisas>
                    </Body>
                </div>
            </div>
        </>
    );
}
export default Formulario;