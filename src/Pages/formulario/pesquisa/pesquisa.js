import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Card } from 'react-bootstrap';
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
    function teste(){
        alert('trabalhando nisso')
    }

    return (
        <>
            <div>
                <div className='teste'>
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
                <div className="li">
                    <div className="beta">
                        <h4>pesquisas</h4>
                        <div>
                            <Card style={{ width: '30rem', borderRadius: '23px' }}>
                                <Card.Body class="alinhar">
                                    <div>
                                        <Card.Title >Pergunta da uc tal</Card.Title>
                                        <Card.Subtitle className="mb-4 text-muted">Professor fulano de tal</Card.Subtitle>
                                        {/*<Card.Link href="/home">Começar</Card.Link>*/}
                                        <Button variant="primary" onClick={teste} >abrir</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="beta">
                        <h4>dashbord gerado com a pesquisa </h4>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OffcanvasExample;