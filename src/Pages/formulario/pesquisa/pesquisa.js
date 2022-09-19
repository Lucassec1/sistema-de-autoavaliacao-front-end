import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import './pesquisa.css';
import Navbargeral from '../navbar'
import api from '../../../api'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { get } from 'react-hook-form';
import Grafico from './grafico'
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

    var [valueid, setvalueid] = React.useState('');

    const handleChange = (event) => {
        setvalueid(event.target.value);
    };
    var lh = String(valueid)
    //var lh = '3'
    //console.log(pesquisas)
    console.log(lh)
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
    function Getid(id) {
        if (id != 0) {
            console.log("pegou id" + id)
        }
    }
   const l = pesquisas?.filter((get) => get.fk_usuario === '3')
   
    console.log(pesquisas)
    function Renderisacad() {
        if (lh === '') {
            return (
                <>
                    <p><h4>Pesquisas lançadas por Você</h4></p>
                    <div>
                        {
                            l?.map(get => { 
                                return (
                                    <>
                                        <p>{get.titulo}</p>
                                    </>
                                )
                            })
                        }
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
                            <input type="text" placeholder="digite aqui" id='input-pesquisa'></input>
                        </div>
                    </div>
                </div>
                <div style={{border: '1px solid red',maxWidth: '100%',display: 'flex', justifyContent: 'space-around'}}>
                    <div style={{maxWidth:'45%',border: '1px solid blue',height:'500px', overflow: 'auto'}}>
                        <div><h2>Pesquisas</h2></div>
                        <div style={{marginTop: '1rem'}}>
                        <Renderisacad/>
                        </div>
                    </div>

                    <div style={{maxWidth:'45%',border: '1px solid red'}}>
                        <div><h2>Dashboard</h2></div>
                        <Grafico/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default OffcanvasExample;