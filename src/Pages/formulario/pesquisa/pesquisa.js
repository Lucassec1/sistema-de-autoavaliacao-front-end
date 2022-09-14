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

    console.log(grupos)

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
    const ng = pesquisas?.map((get) => get.grupos)
    const teste = ng?.map((get) => get.titulo)
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
    function Getid(id){
        if(id != 0){
            console.log("pegou id"+ id)
        }
    }
    console.log(ng)
    console.log(teste    )
    
    function Renderisacad() {
        if (lh === '') {
            return <p>Selecione um grupo</p>
        } else {
            return (
                <>
                    {

                    ng?.map((get) => {
                        return <p>{get.titulo}</p>
                    })

                    }
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
                    <div className="betas">
                        <h4>pesquisas</h4>
                        <div>
                            <Renderisacad/>
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