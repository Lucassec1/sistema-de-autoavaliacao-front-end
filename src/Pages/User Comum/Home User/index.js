import React, { useEffect, useState } from "react";
import api from '../../../api';
import UserHeader from "../components/userBar";

import { AllCards, Card, Container } from './styles'

export default function HomeUser(){
    const [pesquisa, setPesquisa] = useState();
    
    useEffect(() => {
        api.get('/pesquisa')
        .then((response) => {
            setPesquisa(response.data)
        })
        .catch(err => {
            if (err.response.status === 401) if (err.response.status === 401) window.location.href = '/login'
            else alert(err.message)
          })
      }, [])

      console.log(pesquisa)

    return(
        <Container>
            <UserHeader />
            <AllCards>
                <Card>Tent</Card>
            </AllCards>
            
        </Container>
    )
}
