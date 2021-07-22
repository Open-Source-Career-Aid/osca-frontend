import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SideBar from './SideBar';
import Content from './Content';
import "../../Styles/LayoutSkill.css";

const SuperSkill = () => {
    return (
        <>
            <Row>
                <Col md={2} xl={2} lg={2} className="SideBar">
                    <SideBar />
                </Col>
                <Col xl={{span:10, offset:2}} md={{span:10, offset:2}} lg={{span:10, offset:2}} className="Spacing">
                    <Content />
                </Col>
            </Row>
        </>
    )
}

export default SuperSkill
