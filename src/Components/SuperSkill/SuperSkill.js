import React from 'react';
import { Row,Col } from 'react-bootstrap';
import SideBar from './SideBar';
import Content from './Content';

const SuperSkill = () => {
    return (
        <Row>
            <Col xl={2} md={2} lg={2} >
                <SideBar />
            </Col>
            <Col xl={10} md={10} ld={10}>
                <Content />
            </Col>
        </Row>
    )
}

export default SuperSkill
