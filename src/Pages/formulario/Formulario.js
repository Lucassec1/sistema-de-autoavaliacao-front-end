import React, { useEffect, useState, } from "react";
import { Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Navbargeral from "./navbar"
import { Button } from 'antd';

function teste() {
    alert('trabalhando nisso')
}

function Formulario() {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <div>
                <div id='teste'>
                    <Navbargeral/>
                </div>
                <div className='seletor'>
                    <div >
                        <h1 id='titulo' >Pesquisas recentes.</h1>
                        <div className='displayflex'>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Filtro</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={"nome empresa"}>nome empresa</MenuItem>
                                        <MenuItem value={"nome Pessoa"}>nome Pessoa</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <div >
                                <input id='pesquisainput' type='text' placeholder='digite aqui...'></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Row className="justify-content-md-center mt-5">
                        <div class="lucas">
                            <Card style={{ width: '30rem', borderRadius: '23px' }}>
                                <Card.Body class="alinhar">
                                    <div>
                                        <Card.Title >Pergunta da uc tal</Card.Title>
                                        <Card.Subtitle className="mb-4 text-muted">Professor fulano de tal</Card.Subtitle>
                                        {/*<Card.Link href="/home">Começar</Card.Link>*/}
                                        <Button variant="primary" onClick={teste} >Começar</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>

                    </Row>
                </div>
            </div>
        </>
    );
}
export default Formulario;