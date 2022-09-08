import NavBarHome from "../../Components/NavBar/navbar"
import { Grafico, NomeUsuario, CardUsuarios, HeaderRenderUsusarios } from "./styles"
import Graficouse from './components/graficouse';
import { BsFillPersonFill } from "react-icons/bs";
import { FiArrowUpRight, FiArrowDownLeft } from "react-icons/fi";
import api from "../../api";
import './home.css'
import React, { useState, useEffect } from "react";

export default function Home() {
    const [ usuarios, setUsusarios ] = useState([])
    const [pesquisas, setPesquisas ] = useState([])


    useEffect(() => {
        api.get('/usuarios')
            .then((response) => {
                setUsusarios(response.data)
                console.log("foi")

            })
            .catch(() => {
                console.log('n foi')
            });
    }, []
    )

    useEffect(() => {
        api.get('/pesquisa')
            .then((response) => {
                setPesquisas(response.data)
            })
            .catch((e) => {
                console.log(e.response.data)
            });
    }, []
    )
    console.log(pesquisas)

    var receber = [];
    for (var user = 0; user < 8; user++) {
        receber.push(usuarios[user])
    }


    const nome = receber.map((nameuser) => nameuser?.nome);
    return (
        <>
            <NavBarHome usuarios={usuarios} pesquisas={pesquisas} />
            <CardUsuarios class="row justify-content-around">
                <div class="col-6">
                    <HeaderRenderUsusarios>Analise de usuarios</HeaderRenderUsusarios>


                    <ul id='lista'>
                        {
                            nome.map((nome, key) => {
                                return(
                                <li style={{ listStyle: 'none', display: 'flex', marginLeft: '-1%', width: '48rem', padding: '3%', borderBottom: ' 1px solid rgba(37, 38, 40, 0.2)'}}>
                                  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <BsFillPersonFill style={{ background: 'rgba(33, 126, 253, 0.298039)', borderRadius: '6px', width: '30px', height: '25px', color: '#217EFD' }}/>
                                    <NomeUsuario>
                                        {nome}
                                    </NomeUsuario>
                                    </div>
                                    <FiArrowUpRight style={{ background: 'rgba(26, 213, 152, 0.2)', color: '#1AD598', width: '3.2%', height: '24px', borderRadius: '10rem', marginLeft: '21rem' }} />
                                    <p style={{ color: '#1AD598' }}>+ 7,44%</p>
                                    </div>
                                </li>
                                )
                            })

                        }
                    </ul>
                </div>
            </CardUsuarios>
            <Grafico><Graficouse /></Grafico>
        </>
    )
    
}