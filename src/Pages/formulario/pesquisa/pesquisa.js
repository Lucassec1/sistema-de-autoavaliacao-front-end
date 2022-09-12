import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import './pesquisa.css';
import Navbargeral from '../navbar'
import api from '../../../api'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
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

    function resp() {
        alert('a resposta e four(4)')
        setOpen(false);
    }
    const [grupos, setGrupos] = useState()
    const getGrupos = () => {
        api.get('/grupos')
            .then((res) => { setGrupos(res.data) })
            .catch(err => { console.log(err) })
    }

    if (!grupos) getGrupos()
    console.log(grupos)

    const [pesquisas, setPesquisas] = useState()
    const getPesquisas = () => {
        api.get("/pesquisa")
            .then((res) => { setPesquisas(res.data);})
            .catch((err) => { console.error(err) })
    }
    if (!pesquisas) getPesquisas()

    var [valueid, setvalueid] = React.useState('');

    const handleChange = (event) => {
        setvalueid(event.target.value);
    };
   
    function Seletor() {
        return (
            <>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">grupos</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={valueid}
                            label="valueid"
                            onChange={handleChange}
                        >
                            {grupos?.map((get) => {
                                return (
                                    <MenuItem value={get.id}>{get.nome}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </Box>
            </>
        )
    }
    function Cardpesquisa() {
        return (
            <>
                <Card style={{ width: '30rem', borderRadius: '23px' }}>
                    <Card.Body class="alinhar">
                        <div>
                            <Card.Title >Pergunta da uc tal</Card.Title>
                            <Card.Subtitle className="mb-4 text-muted">Professor fulano de tal</Card.Subtitle>
                            {/*<Card.Link href="/home">Começar</Card.Link>*/}
                            <Button onClick={handleOpen}>ver perguntas</Button>
                        </div>
                    </Card.Body>
                </Card>
            </>
        )
    }

    return (
        <>
            <div>
                <div className='teste'>
                    <Navbargeral />
                </div>
                <div className='geral-div-header'>
                    <div>
                        <h4> grupos disponiveis</h4>
                        <div>
                            <Seletor />
                        </div>
                    </div>
                    <div>
                        <input type="text" placeholder="digite aqui"></input>
                    </div>
                </div>
                <div className="li">
                    <div className="beta">
                        <h4>pesquisas</h4>
                        <div>
                            <Cardpesquisa />
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