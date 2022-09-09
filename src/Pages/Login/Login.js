import React, { useContext } from "react";
import Inputt from "./Components/Inputinicial/Input";
import { Context } from "../../Components/Context/AuthContext";

import {
    Container,
    BackgroundForm,
    IllustrationForm,
    FormLogin,
    Title,
    LoginContainer,
    InputCFP
} from './styles'
import 'antd/dist/antd.css';
import { Button } from 'antd';

function Login() {
    //const {authenticated} = useContext(Context);

   
    return (
        <>
            <Container>
                <BackgroundForm>
                    <IllustrationForm />
                </BackgroundForm>
                <LoginContainer>
                    <FormLogin>
                        <Title>Bem-vindo ao SAP</Title>
                        <InputCFP>
                            <Inputt/>
                        </InputCFP>
                    </FormLogin>
                </LoginContainer>
            </Container>
        </>

    )

}

export default Login;
