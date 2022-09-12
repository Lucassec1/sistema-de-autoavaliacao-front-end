import HeaderHome from "../../Components/HeaderHome/HeaderHome"
import { Container, Row, Grafico, UsersContainer, UsersContent, UserLi, UserNameContainer, NomeUsuario, CardUsuarios, HeaderRenderUsusarios } from "./styles"
import Graficouse from './components/graficouse';
import { BsFillPersonFill } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import api from "../../api";
import './home.css'
import React, { useState, useEffect } from "react";

export default function Home() {
    const [usuarios, setUsusarios] = useState([])
    const [pesquisas, setPesquisas] = useState([])

    useEffect(() => {
        api.get('/usuarios')
            .then((response) => {
                setUsusarios(response.data)

            })
            .catch(() => {

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

    var receber = [];
    for (var user = 0; user < 8; user++) {
        receber.push(usuarios[user])
    }

    const newestUsers = [...usuarios].reverse().slice(0, 5)

    const nome = receber.map((nameuser) => nameuser?.nome);
    return (
        <>
            <Container>
                <HeaderHome className="row" usuarios={usuarios} pesquisas={pesquisas} />
                <Row className="row gap-5">
                    <UsersContainer className="col-lg-6">
                        <HeaderRenderUsusarios>Usuários recém adicionados</HeaderRenderUsusarios>
                        <UsersContent id='lista'>
                            {
                                newestUsers?.map(u => {
                                    return (
                                        <UserLi key={u.id}>
                                            <UserNameContainer>
                                                <BsFillPersonFill style={{ background: 'rgba(33, 126, 253, 0.298039)', borderRadius: '6px', width: '30px', height: '25px', color: '#217EFD' }} />
                                                <NomeUsuario>
                                                    {u.nome}
                                                </NomeUsuario>
                                            </UserNameContainer>
                                            {/* <FiArrowUpRight style={{ background: 'rgba(26, 213, 152, 0.2)', color: '#1AD598', width: '3.2%', height: '24px', borderRadius: '10rem', marginLeft: '21rem' }} />
                                                <p style={{ color: '#1AD598' }}>+ 7,44%</p> */}
                                        </UserLi>
                                    )
                                })

                            }
                        </UsersContent>
                    </UsersContainer>
                    <Grafico className="col-lg-5"><Graficouse /></Grafico>
                </Row>
            </Container>
        </>
    )

}