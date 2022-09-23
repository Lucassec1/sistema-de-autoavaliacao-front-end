import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import './pesquisa.css';
import Navbargeral from '../navbar'
import api from '../../../api'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grafico from './grafico'

function OffcanvasExample() {

    const [grupos, setGrupos] = useState()
    useEffect(() => {
        api.get("/grupos")
            .then((response) => {
                setGrupos(response.data);
                console.log("foi");
            })
            .catch((err) => {
                alert(err.message);
            });
    }, []);

    const [pesquisas, setPesquisas] = useState()
    useEffect(() => {
        api.get("/pesquisa")
            .then((response) => {
                setPesquisas(response.data);
                console.log("foi");
            })
            .catch((err) => {
                alert(err.message);
            });
    }, []);

   /* const [resposta, setresposta] = useState()
    useEffect(() => {
        api.get(`/resposta/${15}`)
            .then((response) => {
                setresposta(response.data);
                console.log("lucas");
            })
            .catch((err) => {
                alert(err.message);
            });
    }, []);*/
    const [respostas, setrespostas] = useState()
    useEffect(() => {
        api.get(`/resposta`)
            .then((response) => {
                setrespostas(response.data);
                console.log("lucas");
            })
            .catch((err) => {
                alert(err.message);
            });
    }, []);
    
    var [valueid, setvalueid] = React.useState('');

    const handleChange = (event) => {
        setvalueid(event.target.value);
    };
    var lh = String(valueid)
    //const lucas = pesquisas?.map((get) => get.grupos)
    //const lio = lucas?.map((get) => get?.fk_grupo)
    console.log(pesquisas)
    console.log(respostas)
    //console.log(resposta);
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
    var [filt, setfilt] = useState()
    const handleChangefilt = (e) => setfilt(e.target.event) 
    function Seletorconcluido() {
        return (
            <>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">pesquisa</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={filt}
                            label="valueid"
                            onChange={handleChangefilt}
                        >
                            <MenuItem value={'none'}>none</MenuItem>
                            <MenuItem value={'Pesquisas concluidas'}>Pesquisas concluidas</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </>
        )
    }

    function Tampao(){
        if(filt === 'Pesquisas concluidas'){
            return(
                <>
                </>
            )
        }
    }
    const l = pesquisas?.filter((get) => get.fk_usuario === '3')

    function Renderisacad() {
        if (lh === '') {
            return (
                <>
                    <div>
                        <div>
                            <h4 style={{ align: 'center', display: 'flex', marginLeft:'3rem' }}>Pesquisas lançadas por você</h4>
                        </div>
                        <div id="lh">
                            {
                                l?.map(get => {
                                    return (
                                        <>
                                            <div>
                                                <Card id='te'>
                                                    <CardContent>
                                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                            <h4>{get.titulo}</h4>
                                                        </Typography>
                                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                            <p>{get.descricao}</p>
                                                        </Typography>
                                                    </CardContent>
                                                    
                                                </Card>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </>
            )

        } else {
            return (
                <>
                    <p>nenhuma pesquisa lançada</p>
                </>
            )
        }
    }

    return (
        <>
            <div>
                <div className='teste'>
                    <Navbargeral />
                </div>
                <div className='geral-div-header'>
                    <div className='sec-div-geral'>
                        <div>
                            <h4> grupos disponiveis</h4>
                            <div>
                                <Seletor />
                            </div>
                        </div>
                        <div>
                        <h5>filtra pesquisa</h5>
                            <div>
                                <Seletorconcluido/>
                            </div>
                        </div>
                        <div>
                            <input type="text" placeholder="digite aqui" id='input-pesquisa'></input>
                        </div>
                    </div>
                </div>
                <div style={{display:'flex'}}>
                    <div>
                        <Renderisacad />
                    </div>
                    <div style={{border:'1px solid blue', marginRight:'150px'}}>
                        <div >
                            <Grafico/>
                        </div>
                        <div>
                            <h6>Legenda</h6>
                            <p className='fonte'><button id='cor-azul'></button>Pesquisas concluidas</p>
                            <p className='fonte'><button id='cor-yellow'></button>Pesquisas Em Andamento</p>
                            <p className='fonte'><button id='cor-laganja'></button>media de notas <br/>
                            acima de 7</p>
                            <p className='fonte'><button id='cor-verde'></button>media de notas <br/>
                            abaixo de 7</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
export default OffcanvasExample;