import React from "react";
import Inputt from "../../Components/Inputinicial/Input";

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
    return (
        <>
            <Container>
                <BackgroundForm><IllustrationForm /></BackgroundForm>
                <LoginContainer>
                    <FormLogin>
                        <Title>Bem-vindo ao, Nome</Title>
                        <InputCFP><Inputt/></InputCFP>
                        <Button type="primary">Login</Button>
                    </FormLogin>
                </LoginContainer>
            </Container>
        </>

    )

}

export default Login;
