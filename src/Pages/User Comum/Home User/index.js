import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from '../../../api';
import UserHeader from "../components/userBar";

import { 
    AllCards,
    Card, 
    Container, 
    Title,
    Description,
    Button,
} from './styles'

export default function HomeUser(){
    const [pesquisa, setPesquisa] = useState();
    const id = localStorage.getItem('id').substring(1, (localStorage.getItem('id')).length - 1)
    
    useEffect(() => {
        api.get('/usuarios/'+id+'/pesquisas')
        .then((response) => {
            setPesquisa(response.data)
        })
        .catch(err => {
            if (err.response.status === 401) if (err.response.status === 401) window.location.href = '/login'
            else alert(err.message)
          })
      }, [])

        //   console.log(pesquisa)

    return(
        <Container>
            <UserHeader />
            <AllCards>
                {/* <Card>Tent</Card> */}
 
                {pesquisa?.length > 0 ? (
                        pesquisa?.map((p) => (
                            <Card key={p.id} >
                                <Title>{p.titulo}</Title>
                                <Description>Pesquisa de Satisfação</Description>
                                <Link style={{width: '134px', height: '51px', backgroundColor: '#2269D3', color: 'white', borderRadius: '4px', textDecoration: 'none', display:'flex', alignItems: 'center', justifyContent: 'center'}} to={"/pesquisa/" + p.id}>Começar</Link>
                            </Card>
                        ))
                    ) : (
                        <div>
                            Não há pesquisas :()
                        </div>
                    )}
            </AllCards>         
        </Container>
    )
}
