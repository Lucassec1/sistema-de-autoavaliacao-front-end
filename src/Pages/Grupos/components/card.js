import React, { useState, useEffect } from "react";
import { CardG, NomeGrupo, OrgCard, Formatapag } from "./styles";
import Avatar from '@mui/material/Avatar';
import api from "../../../api";

function Card() {
    const [grupo, setGrupo] = useState([])

    useEffect(() => {
        api
            .get("/grupos")
            .then((response) => {
                setGrupo(response.data);
                console.log("foi");
            })
            .catch((err) => {

            });
    }, []);


    return (
        <>
            <Formatapag>
                {
                    grupo.map((g, key) => {
                        return (
                            <>

                                <CardG>
                                    <OrgCard>
                                        <Avatar style={{ width: '5rem', height: '5rem' }} />
                                        <NomeGrupo key={key}>{g?.nome}</NomeGrupo>
                                    </OrgCard>
                                </CardG>

                            </>
                        )
                    })
                }
            </Formatapag>
        </>
    );



}
export default Card;
/**{
            grupo.map((g, key) => {
                return (
                    <>
                        <CardG>
                            <OrgCard>
                                <Avatar style={{ width: '5rem', height: '5rem' }} />
                                <NomeGrupo>{g.nome}</NomeGrupo>
                            </OrgCard>
                        </CardG>
                    </>
                )

            })
        } */