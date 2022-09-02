import React from 'react'
import { HeaderHome } from './styles';
import { CardHome } from './styles';
import { HeaderCardHome } from './styles';
import { NumericEstatistica } from './styles';
import { Contador } from './styles';
import { Textp } from './styles';
import { Card, Col, Row } from 'antd';
import LineChart from '../LinearChart';

export default function NavBarHome(props) {
    const users = props.usuarios;

    const dates = [];
    const daysLastWeek = [];
    const today = new Date();
    users.map(d => {
        dates.push(new Date(d.created_at).toISOString().split('T')[0])
    })

    for(let i = 0; i < 7; i++) {
        const date = new Date(today.setDate(today.getDate() - 1))
        daysLastWeek.push(date.toISOString().split('T')[0])
    }

    const count = [0, 0, 0, 0, 0, 0, 0];

    dates.map(t => {
          let i = -1;
          daysLastWeek?.map(u => {
            i++;
            if (t === u) {
                count[i]++;
            }
          })
    })

    count.reverse();
    daysLastWeek.reverse();
    
    return (
        <>
            <HeaderHome class="navbar bg-light">
                <h1 style={{ color: '#fff' }}>Dashboard</h1>
                <CardHome class="container text-center">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card bordered={false} style={{ background: '#fafafa', border: '1px solid #EBEBEB', boxShadow: '0px 1px 5px rgba(32, 90, 177, 0.1)', borderRadius: '4px' }}>
                                <HeaderCardHome>
                                    Pesquisas Adicionadas
                                    <NumericEstatistica>+7%</NumericEstatistica>
                                </HeaderCardHome>
                                <Contador>3514</Contador>
                                <Textp>Período de 7 dias</Textp>
                                <div style={{height: "70px", width: "75%"}}>
                                    <LineChart  />
                                </div>
                                
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card bordered={false} style={{ background: '#fafafa', border: '1px solid #EBEBEB', boxShadow: '0px 1px 5px rgba(32, 90, 177, 0.1)', borderRadius: '4px' }}>
                                <HeaderCardHome>
                                    Pesquisas Ativas
                                    <NumericEstatistica>+7%</NumericEstatistica>
                                </HeaderCardHome>
                                <Contador>1584</Contador>
                                <Textp>Período de 7 dias</Textp>
                                <div style={{height: "70px", width: "75%"}}>
                                    <LineChart />
                                </div>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card bordered={false} style={{ background: '#fafafa', border: '1px solid #EBEBEB', boxShadow: '0px 1px 5px rgba(32, 90, 177, 0.1)', borderRadius: '4px' }}>
                                <HeaderCardHome>
                                    Pessoas Adicionadas
                                    <NumericEstatistica>+7%</NumericEstatistica>
                                </HeaderCardHome>
                                <Contador>{users.length}</Contador>
                                <Textp>Período de 7 dias</Textp>
                                <div style={{height: "70px", width: "75%"}}>
                                    <LineChart data={count} days={daysLastWeek} />
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </CardHome>
            </HeaderHome>
        </>
    )
}