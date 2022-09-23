import React from "react";

import Avatar from '@mui/material/Avatar';

import { 
    CardG, 
    NomeGrupo, 
    OrgCard, 
    Formatapag
} from "./styles";

import EditarGrupo from "./edit";
import Inspecionar from "./inspect";

function Card({ grupo }) {
    return (
        grupo &&
        <>     
            <Formatapag>
                {
                    grupo.map((g, key) => {
                        return (
                            <>
                                <CardG>    
                                    <Inspecionar />      
                                    <EditarGrupo dados={g}/>
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