import React from "react";
import { CardG, NomeGrupo, OrgCard} from "./styles";
import Avatar from '@mui/material/Avatar';

function Card() {

    return (
        <>
            <CardG>
                <OrgCard>
                    <Avatar style={{ width: '5rem', height: '5rem' }}/>
                    <NomeGrupo>Nome Grupo</NomeGrupo>
                </OrgCard>
            </CardG>
        </>
    )
}
export default Card;