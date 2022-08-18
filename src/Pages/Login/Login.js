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

function Login() {


    return (
        <>
            <Container>
                <BackgroundForm><IllustrationForm /></BackgroundForm>
                <LoginContainer>
                    <FormLogin>
                        <Title>Bem-vindo ao, <span> Nome</span></Title>
                        <InputCFP><Inputt/></InputCFP>
                    </FormLogin>
                </LoginContainer>
            </Container>
        </>

    )

}

export default Login;

/*<Inputt /> */
/* <IllustrationForm>aaaaa</IllustrationForm> */