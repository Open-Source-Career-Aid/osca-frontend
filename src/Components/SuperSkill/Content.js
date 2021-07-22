import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "../../Styles/Content.css"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

const Content = () => {
    return (
        <div className="">
            <Row>
                <Col md={1} className="text-end">
                    <IconButton>
                        <ArrowBackIcon className="Icon" />
                    </IconButton>
                </Col>
                <Col md={7} className="heading text-start">
                    Web Development
                </Col>
                <Col md={1}>
                    <IconButton>
                        <EditIcon className="Icon" />
                    </IconButton>
                </Col>
                <Col md={2} className="Edit text-center justify-content-center">
                    Suggest an edit
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 7, offset: 1 }} className="SubHeading">
                    Tags
                </Col>
                <Col md={1}>
                    <IconButton>
                        <EditIcon className="Icon" />
                    </IconButton>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 7, offset: 1 }}>
                    <span md={{ offset: 1, span: 1 }} className="box-skill-blue">
                        HTML
                    </span>
                    <span className="box-skill-red">
                        CSS
                    </span>
                    <span className="box-skill-blueD">
                        MachineLearning
                    </span>
                    <span md={{ offset: 1, span: 1 }} className="box-skill-blue">
                        HTML
                    </span>
                    <span className="box-skill-red">
                        CSS
                    </span>
                    <span className="box-skill-blueD">
                        MachineLearning
                    </span>
                    <span md={{ offset: 1, span: 1 }} className="box-skill-blue">
                        HTML
                    </span>
                    <span className="box-skill-red">
                        CSS
                    </span>
                    <span className="box-skill-blueD">
                        MachineLearning
                    </span>
                </Col>
            </Row>
            <Row className="pt-3">
                <Col md={{ offset: 1, span: 7 }} className="SubHeading">
                    Pre-requisites
                </Col>
                <Col md={1}>
                    <IconButton>
                        <EditIcon className="Icon" />
                    </IconButton>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 7, offset: 1 }}>
                    <span className="box">
                        HTML
                    </span>
                    <span className="box">
                        CSS
                    </span>
                    <span className="box">
                        Machine Learning
                    </span>
                    <span className="box">
                        HTML
                    </span>
                    <span className="box">
                        CSS
                    </span>
                </Col>
            </Row>
        </div>
    )
}

export default Content
