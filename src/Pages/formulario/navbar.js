import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { BsArrowLeftShort } from "react-icons/bs";


function navbargeral() {
    function voltar() {
        window.history.back();
    }
    return (
        <div>
            <div className='teste'>
                <Navbar variant="primary" style={{ color: '#fff' }} expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link className='navItem'> <BsArrowLeftShort size="1.5rem" nClick={voltar} /></Nav.Link>
                                <Nav.Link className='navItem' href="/menupesquisa"> Criar Pesquisa</Nav.Link>
                                <Nav.Link  className='navItem' href="/minhapesquisa">Minhas Pesquisa</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}
export default navbargeral;
