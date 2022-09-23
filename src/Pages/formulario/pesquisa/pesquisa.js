import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import './pesquisa.css';
import Navbargeral from '../navbar'
import api from '../../../api'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grafico from './grafico'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { PieChart, Pie, Cell } from "recharts";

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
                                                    {/*<CardActions>
                                                        <Button size="small">Learn More</Button>
                                                    </CardActions>*/}
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
    function Grafico(){
        const data = [
            { name: "Group A", value: 700 },
            { name: "Group B", value: 300 },
            { name: "Group C", value: 300 },
            { name: "Group D", value: 200 }
          ];
          
          const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
          
          const RADIAN = Math.PI / 180;
          const renderCustomizedLabel = ({
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            percent,
            index
          }: any) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);
          
            return (
              <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
              >
                {`${(percent * 100).toFixed(0)}%`}
              </text>
            );
          };
          return (
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          );
          
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
                <div style={{display:'flex'}}>
                    <div>
                        <Renderisacad />
                    </div>
                    <div style={{border:'1px solid blue', marginRight:'70px'}}>
                        <div><Grafico/></div>
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