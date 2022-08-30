import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import { BsArrowLeftShort } from "react-icons/bs";
import { useForm } from "react-hook-form";
import './pesquisa.css';
function OffcanvasExample() {
    function voltar() {
        window.history.back();
    }

    return (
        <>
            <div>
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
                        
                    </div>
                </Row>
            </div>
        </>
    );
}

export default OffcanvasExample;