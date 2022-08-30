import React from 'react'
import { HeaderHome } from './styles';
import { CardHome } from './styles';
import { HeaderCardHome } from './styles';
import { NumericEstatistica } from './styles';
import { Card, Col, Row } from 'antd';
export default function NavBarHome() {
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
                                
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card bordered={false} style={{ background: '#fafafa', border: '1px solid #EBEBEB', boxShadow: '0px 1px 5px rgba(32, 90, 177, 0.1)', borderRadius: '4px' }}>
                                <HeaderCardHome>
                                    Pesquisas Ativas
                                    <NumericEstatistica>+7%</NumericEstatistica>
                                </HeaderCardHome>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card bordered={false} style={{ background: '#fafafa', border: '1px solid #EBEBEB', boxShadow: '0px 1px 5px rgba(32, 90, 177, 0.1)', borderRadius: '4px' }}>
                                <HeaderCardHome>
                                    Pessoas Adicionadas
                                    <NumericEstatistica>+7%</NumericEstatistica>
                                </HeaderCardHome>
                            </Card>
                        </Col>
                    </Row>
                </CardHome>
            </HeaderHome>
        </>
    )
}