import React from 'react'
import { HeaderHome } from './styles';
import { CardHome } from './styles';
import { Card, Col, Row } from 'antd';
export default function NavBarHome() {
    return (
        <>
            <HeaderHome class="navbar bg-light">
                <h1 style={{color: '#fff'}}>Dashboard</h1>
                <CardHome class="container text-center">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="Card title" bordered={false}>
                                Card content
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Card title" bordered={false}>
                                Card content
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Card title" bordered={false}>
                                Card content
                            </Card>
                        </Col>
                    </Row>
                </CardHome>
            </HeaderHome>
        </>
    )
}