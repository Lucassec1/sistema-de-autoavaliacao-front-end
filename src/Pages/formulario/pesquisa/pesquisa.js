import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import './pesquisa.css';
import Navbargeral from '../navbar'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function OffcanvasExample() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

function resp(){
    const handleClose = () => setOpen(false);
    alert('a resposta e four(4)')
}
    return (
        <>
            <div>
                <div className='teste'>
                    <Navbargeral/>
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
                                        <Button onClick={handleOpen}>ver perguntas</Button>
                                        <Modal
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>
                                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                                    titulo da pesquisa
                                                </Typography>
                                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                    <h3 style={{ fontSize: '12px' }}> pergunta: quantos dedos LULA tem?</h3>
                                                    <FormControl component="fieldset">
                                                        <FormGroup aria-label="position" row>
                                                            <FormControlLabel
                                                                value="five"
                                                                control={<Checkbox />}
                                                                label="five"
                                                                labelPlacement="five"
                                                            />
                                                            <FormControlLabel
                                                                value="four"
                                                                control={<Checkbox />}
                                                                label="four"
                                                                labelPlacement="four"
                                                            />
                                                            <FormControlLabel
                                                                value="six"
                                                                control={<Checkbox />}
                                                                label="six"
                                                                labelPlacement="six"
                                                            />
                                                        </FormGroup>
                                                        <Button onClick={resp}>fechar modal</Button>
                                                    </FormControl>
                                                </Typography>
                                            </Box>
                                        </Modal>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="betas">
                        <h4>dashbord gerado com a pesquisa </h4>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OffcanvasExample;