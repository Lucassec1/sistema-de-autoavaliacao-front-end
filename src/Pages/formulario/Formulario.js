import { Layout } from 'antd';
import React from 'react';
import { Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Checkbox,
    Upload,
} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
function modal(){
    
}
function teste(){
    alert('trabalhando nisso')
}

function app() {
    return (
        <>
            <div>
                <div id='teste'>
                    <Navbar variant="primary" style={{ color:'#fff'}} expand="lg">
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/home">minhas pesquisa</Nav.Link>
                                    <Nav.Link href="/home">pesquisa pendentes</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>
                    <Card>
                        <Card.Body id='titulo'>Pesquisas recentes.</Card.Body>
                    </Card>
                </div>
                <div>
                    <Row className="justify-content-md-center mt-5">
                        <div class="lucas">
                            <Card class="alinhar" style={{ width: '18rem', borderRadius: '23px' }}>
                                <Card.Body>
                                    <Card.Title>Pergunta da uc tal</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Professor fulano de tal</Card.Subtitle>
                                    {/*<Card.Link href="/home">Começar</Card.Link>*/}
                                    <Button variant="primary" onClick={teste} >Começar</Button>
                                </Card.Body>
                            </Card>
                        </div>

                    </Row>
                </div>
            </div>
        </>
    );
}
export default app;