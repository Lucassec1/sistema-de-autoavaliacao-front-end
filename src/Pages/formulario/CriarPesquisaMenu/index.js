import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../../../api'
import CardCriarPesquisa from './CardCriarPesquisa';
import { Container, Top, ContTipos } from './styles';
import { BsArrowLeftShort } from "react-icons/bs";

function CriarpesquisaMenu() {
    const navigate = useNavigate();

    const [tiposPesquisa, setTiposPesquisa] = useState()
    const getTiposPesquisa = () => {
        api
            .get(`/tipoPesquisa`)
            .then(res => { setTiposPesquisa(res.data) })
            .catch(err => { alert(err) })
    }
    
    if (!tiposPesquisa) getTiposPesquisa()
    function Setavoltar(){
        function voltar(){
            window.history.back();
        }
        return(
            <>
                <BsArrowLeftShort onClick={voltar} style={{fontSize: '20px'}}/>
            </>
        )
    }
    return (
        tiposPesquisa &&
        <Container>
            <Top>
                <Setavoltar/>
                <h1>Criando uma nova pesquisa</h1>
            </Top>
            
            <ContTipos>
                {tiposPesquisa.map(pesq => 
                    <CardCriarPesquisa key={pesq.id} values={pesq} href={`/criarPesquisa/${pesq.nome}`}/>
                )}
                
            </ContTipos>
        </Container>
    );
}

export default CriarpesquisaMenu;

{/* <div>
    <div id='teste'>
        <Navbar variant="primary" style={{ color: '#fff' }} expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/pesquisas"> <BsArrowLeftShort /></Nav.Link>
                        <Nav.Link href="/criarpesquisa"> Criar Pesquisa</Nav.Link>
                        <Nav.Link href="/home">Minhas Pesquisa</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>

    <Row className="justify-content-md-center mt-5">
        <div className="form">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                   <div>
                       <h5> Ex. de formulario</h5>
                       <h6> voce gostou de tal coisa</h6>
                   </div>
                   <input type='number' placeholder='1, 2, 3....'
                   {...register("numero", { required: true })}
                   style={{borderRadius:'0.5rem', width:'60%', height:'30px'}}
                   ></input>
                   <p>escolha de 1 a 10, sendo 1 ruim e 10 bom</p>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    </Row>
</div> */}