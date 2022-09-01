import React, { useEffect, useState } from "react";
import api from '../../../api';
import UserHeader from "../components/userBar";

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
        <>
            <UserHeader />
        </>
    )
}
