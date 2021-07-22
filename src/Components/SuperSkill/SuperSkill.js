import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SideBar from './SideBar';
import Content from './Content';
import "../../Styles/LayoutSkill.css";

const SuperSkill = () => {
    return (
        <>
            <Row>
                <Col xl={2} md={2} lg={2} className="SideBar justify-content-start text-start" >
                    <SideBar />
                </Col>
                <Col xl={10} md={10} lg={10} className="Spacing">
                    <Content />
                </Col>
            </Row>
        </>
    )
}

export default SuperSkill
