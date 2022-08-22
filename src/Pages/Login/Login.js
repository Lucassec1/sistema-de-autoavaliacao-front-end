import React from "react";
import Inputt from "../../Components/Inputinicial/Input";
import Button from "../../Components/ButtonHome/ButtonHome";
import {
    Container,
    BackgroundForm,
    IllustrationForm,
    FormLogin,
    Title,
    LoginContainer,
    InputCFP
} from './styles'
import ButtonLogin from "../../Components/ButtonHome/ButtonHome";

function Login() {
    return (
        <>
            <Container>
                <BackgroundForm><IllustrationForm /></BackgroundForm>
                <LoginContainer>
                    <FormLogin>
                        <Title>Bem-vindo ao, Nome</Title>
                        <InputCFP><Inputt/></InputCFP>
                        <ButtonLogin/>
                    </FormLogin>
                </LoginContainer>
            </Container>
        </>

    )

}

export default Login;

/*<Inputt /> */
/* <IllustrationForm>aaaaa</IllustrationForm> */